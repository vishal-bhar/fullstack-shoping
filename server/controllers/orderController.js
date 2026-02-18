import ROLE from "../utils/constants.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

const getOrdersByUserId=async (req,res)=>{
    const userId=req.id;
    try {
        const order= await Order.find({userId})
        .populate({
            path:"productId.id",
            select:"name price category images"
        });

        if(!order){
               return res.status(404)
        .json({
            success:false,
            message:"No order to show"
        })
        };

         return res.status(200)
        .json({
            success:true,
            data:order
        })
        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
        
    }
};


const getAllOrders= async (req,res)=>{
    if(req.role !== ROLE.admin){
        return res.status(403)
        .json({
            success:false,
            message:"You are not authorized to access this resource"
        })
    };

    const {page,limit}=req.query;

    try {
        
        const orders =await Order.find()
        .populate({
            path:"productsId",
            select:"name price category images"
        })
        .populate({
            path:"userId",
            select:"name email"
        })
        .limit(limit * 1)
        .skip((page -1 ) * limit)
        .sort({createdAt: -1});

        if(!orders ){
             return res.status(401)
        .json({
            success:false,
            message:"no order to show"
        })
        };

        const count= await Order.countDocuments();

        
 return res.status(401)
        .json({
            success:true,
           data:orders,
           totalPages:Math.ceil(count / limit),
           currentPage:Number(page)
        })


    } catch (error) {

       return res.status(500)
        .json({
            success:false,
            message:error.message
        })  
    }
};

const updateOrderStatus =async (req,res)=>{
if(req.role !== ROLE.admin){
    return res.status(403)
    .json({
        success:false,
        message:"You are not Authorized to access this resource"
    })
};

const {paymentId}=res.params;
const {status}=res.body;

try {
    const order = await Order.findByIdAndUpdate({razorpayPaymentId : paymentId},{status},{new:true});
    if(!order){
           return res.status(404)
    .json({
        success:false,
        message:"Order not found"
    })
    };

        return res.status(200)
    .json({
        success:true,
        data:order,
        message:"Order status updated"
    })
    
} catch (error) {
    return res.status(500)
    .json({
        success:false,
        message:error.message
    })
    
}
}

const getMetrics= async (req,res)=>{
    if(req.role !== ROLE.admin){
        return res.status(403)
        .json({
            success:false,
            message:"tou arre not authorized to acces this resource"
        })
    };
    const {startDate, endDate} =req.query;

    try {

        const start=new Date(startDate || new Date()
        .setDate(new Date().getMonth()-1)
    );

        const end =new Date(endDate || new Date());

        // calculate total sales
        const orderInRange= await Order.find({
            createdAt:{$gte:start , $lt: end},
        });
        const totalSales= orderInRange.reduce((acc, order)=> acc + order.totalprice ,0);

        // Calculate this months orders
        const thisMonthOrder= orderInRange;

        //get the last month
        const lastMonth= new Date(new Date().setMonth(new Date().getMonth()-1))

        //get last month orders
        const lastMonthOrder= await Order.find({
            createdAt:{ $gte: lastMonth , $lt: start}
        });

        //calculate total amount of this moths orders
        const totalThisMonth=thisMonthOrder.reduce((acc,order)=>acc + order.totalPrice,0);

        //calculate total amount of last month orders
        const totalLastMonth=lastMonthOrder.reduce((acc,order)=>acc+ order.totalPrice,0);

        //calculate users
        const salesGrowth=totalLastMonth ?
        ((totalThisMonth - totalLastMonth) / totalLastMonth) *100 : 0;
        
        //Calculate users
        const thisMonthUsers= await User.find({
            createdAt:{ $gte: start ,$lt: end}
        });

        const lastMonthUsers= await User.find({
            createdAt :{ $gte : lastMonth , $lt:start},
        });

        const usersGrouth=lastMonthUsers.length ?
        ((thisMonthUsers.length - lastMonthUsers.length) /  lastMonthUsers.length) * 100 :0 ;


        const lastHour=new Date(new Date().setDate(new Date().getHours() - 1));

        const lastHourOrders= await Order.find({
            createdAt: { $gte : lastHour , $lte: new Date()},
        });

        const previousDayOrders= await Order.find({
            createdAt: { $gte : new Date(new Date().setDate(new Date().getDate() - 1)),
            },
        })

        const lastHourGrowth=previousDayOrders.length ?
        (lastHourOrders.length / previousDayOrders.length) * 100 :0 ;

        // recent sales
        const recentOrders= await Order.find()
        .populate({
            path:"userId",
            select:"name email",
        })
        .sort({createdAt: -1})
        .limit(9);

        //product deliver in last 6 months wih their category and count according to month
        const sixMonthAgo= new Date(
            new Date().setMonth(new Date().getMonth() -6)
        );

        const sixMonthsOrders=await Order.find({
            createdAt: { $gte : sixMonthAgo},
        })
        .populate({
            path:"products.id",
            select:"category"
        });

        //get them month wise for eg : {jan : { keyboard :1 , mouse :2 ,headset :1}}
        const monthWise=sixMonthsOrders.reduce((acc,order)=>{
            const month =new Date(order.createdAt).toLocaleString("default",{
                month:"short"
            });

            order.products.forEach((product)=>{
                if(!acc[month]){
                    acc[month]={};
                }
                if(!acc[month][product.id.category]){
                    acc[month][product.id.category] =1;
                }else{
                    acc[month][product.id.category]++
                }
            });

        return acc;
        })


        return res.status(200)
        .json({
            success:true,
            data:{
                totalSales:{
                    count:totalSales,
                    growth:salesGrowth,
                },
            users:{
                count:thisMonthUsers.length,
                growth:usersGrouth,
            },
            sales:{
                count:totalThisMonth,
                growth:salesGrowth,
            },
            activeNow:{
                count:lastHourOrders.length,
                growth:lastHourGrowth
            },
            recentSales:{
                count:totalThisMonth,
                users:recentOrders,
            },
            sixMonthSBarCartData:monthWise,
            },
        })

    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
        
    }
}

export {getOrdersByUserId,getAllOrders,updateOrderStatus,getMetrics}