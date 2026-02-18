import ROLE from "../utils/constants.js";
import Product from "../models/Product.js";
import cloudinary from "../utils/cloudinary.js"

const createProduct=async (req,res)=>{

    if(req.role !== ROLE.admin){
        return res.status(401)
        .json({
            success:false,
            message:"access denied"
        })
    }

    try {
            const {name, price, description,stock,colors ,category}=req.body;

            const uploadedImages=[];

            for(const file of req.files){
                const result= await cloudinary.uploader.upload(req.files[file].path,{
                    folder:"products"
                });
                uploadedImages.push({
                    url:result.secure.url,
                    id:result.public_id
                });
            }

            const product=new Product({
                name,
                price,
                description,
                stock,
                colors,
                category,
                images:uploadedImages,
            });

            await product.save();

            return res.status(200)
            .json({
                success:true,
                message:"product added successfully",
                data:product
            })
            
    } catch (error) {
         return res.status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
};

const updateProduct =async(req,res)=>{

    if(req.role !== ROLE.admin){
        return res.status(404)
        .json({
            success:false,
            message:"Access Denied"
        });
    };

    try {

        const {...data}=req.body;
        const {id}=req.params;

        const product= Product.findByIdAndUpdate(id,data,{new:true});

        if(!product){
            return res.status(404)
            .json({
                success:false,
                message:" product not found"
            })
        };

        return res.status(200)
        .json({
            success:true,
            message:"product update success fuly",
            data:product
        })

        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
    }
};

const deleteProduct=async (req,res)=>{
    if(req.role !== ROLE.admin){
        return res.status(404)
        .json({
            success:false,
            message:"Access denied"
        })
    };

    try {
        const {id} =req.params;

        const product =Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404)
            .json({
                success:false,
                message:"Product not found"
            })
        };

        return res.status(200)
        .json({
            success:true,
            message:"product file is deleted",
            data:product
        });

        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
    }

};

const getProduct=async (req,res)=>{
 try {
    let {page,limit,category,price,search}= req.query;

    page=parseInt(page) || 1;
    limit=parseInt(limit) || 9;

    let query={}

    if(category) query.category=category.charAt(0).toUpperCase() + category.slice(1);

    if(category==="all") delete query.category;

    if(search) query.name={$regex:search, $options:"1"};

    if(price >0) query.price={$lte:price};

    const totalProducts=await Product.countDocuments(query);

    const totalPages=Math.ceil(totalPrice / limit);

    const products=await Product.find(query)
    .select("name price image rating description blacklistd")
    .skip((page -1 ) * limit)
    .limit(limit);

    let newProductArray=[];

    products.forEach((product)=>{
        const productObj=product.toObject();
        productObj.image=productObj.images[0].url;
        delete productObj.images;
        newProductArray.push(productObj);

    });

    if(!products.length){
        return res.status(404)
        .json({
            success:false,
            message:"No product Found"
        });
    };

    return res.status(200)
    .json({
        success:true,
        message:"product fetched",
        data:newProductArray,
        pagination:{
            totalProducts,
            totalPages,
            currentPages:page,
            pageSize:limit,
        },
    });

 } catch (error) {
    return res.status(500)
    .json({
        success:false,
        message:error.message
    })
 }
};

const getProductByName=async(req,res)=>{
    const {name} =req.params;

    try {
        const product= await Product.findOne({name});

        if(!product){
            return res.status(404)
            .json({
                success:false,
                message:"product not found"
            });
        };

        return res.status(200)
        .json({
            success:true,
            message:"product found",
            data:product
        })

    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
        
    }

};

const blackListProduct=async (req,res)=>{
    if(req.admin !== ROLE.admin){
        return res.status(404)
        .json({
            success:false,
            message:"Access denied"
        });
    }
    const {id}=req.params;

    try {
        const product=await Product.findByIdAndUpdate(id,{blacklisted:true},{new:true});

        if(!product){
            return res.status(404)
            .json({
                success:false,
                message:"Product not Found"
            })
        }

        return res.status(200)
        .json({
            success:true,
            message:`The Product ${product.name} has been Blacklisted`,
            data:product,
        })
        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
        
    }
};

const removeFromBlacklist=async (req,res)=>{
      if(req.admin !== ROLE.admin){
        return res.status(404)
        .json({
            success:false,
            message:"Access denied"
        });
    }
    const {id}=req.params;

    try {
        const product=await Product.findByIdAndUpdate(id,{blacklisted:false},{new:true});

        if(!product){
            return res.status(404)
            .json({
                success:false,
                message:"Product not Found"
            })
        }

        return res.status(200)
        .json({
            success:true,
            message:`The Product ${product.name} has been removed from Blacklisted`,
            data:product,
        })
        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
        
    }
}

  export {createProduct,updateProduct,deleteProduct,getProduct,getProductByName,blackListProduct,removeFromBlacklist};