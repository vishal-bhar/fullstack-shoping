import Pincode from "../models/Pincode.js";
import ROLE from "../utils/constants.js"

const addPincodes= async (req,res)=>{

if(req.role !== ROLE.admin){
    return res.status(401)
    .json({
        success:false,
        message:"access denied"
    });
};



const {pincodes}=req.body;
    
if(!pincodes || pincodes.length===0){
    return  res.status(400)
    .json({
        success:false,
        message:"please proviede the pincode "
    });
}

try {
    const existingPincode= await Pincode.find({
        pincode:{$in: pincodes.map((p)=>p.pincode)}
    });
    

    const existingPincodeValue=existingPincode.map((p)=>p.pincode);

    const newPincodes=pincodes.filter((p)=> !existingPincodeValue.includes(p.pincode));
    


    if(newPincodes.length === 0){
        return res.status(400)
        .json({
            success:400,
        success:"All pin code is Already exist"
        })
    };

    await Pincode.insertMany(newPincodes)

    return res.status(200)
    .json({
        success:true,
        message:"Pincode Added Successfully"
    })

} catch (error) {
    return res.status(500)
    .json({
        message:false,
        message:error.message
    })
}
};

const getPincode=async(req,res)=>{
   const {pincode}=req.params ;

   try {
    const existingPincode= await Pincode.find({pincode});

    if(existingPincode.length === 0){
        return res.status(404).json({
            success:false,
            message:"No delivery availble for this product"
        })
    };

    return res.status(200).json({
        success:true,
        message:"Delivery available"
    })

   } catch (error) {
    return res.status(500).json({
        success:false,
        message:error.message
    })
    
   }
}



export {addPincodes,getPincode}