
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";




const signup =async(req,res)=>{
    const {name, email,password, phone}=req.body;
    console.log(req.body)

    try {

        let user= await User.findOne({email});

        if(user){
            return res
            .status(400)
            .json({success:false,
                message:"please try again with different user"})
        };

        const hasshedPassword=await bcrypt.hash(password,10)

        user=new User({
            name,
            email,
            phone,
            password:hasshedPassword,
        })

        await user.save();

        return res.status(201)
        .json({
            success:true,
            message:"user saved successfully ."
        })

        
    } catch (error) {
        return res.status(500)
        .json({success:false , message:error.message});
    }



};


const login= async(req,res)=>{
    const {email,password}=req.body;

    try {
        const user =await User.findOne({email});

        if(!user){
            return res.status(404)
            .json({
                success:false,
                message:"user not found"
            });
        };

        const compairPassword= await bcrypt.compare(password,user.password);

        if(!compairPassword){
            return res.status(400)
            .json({success:false, message:"invalid credecial"})
        }

        const token=jwt.sign({id:user._id, role:user.role},
            process.env.JWT_SECRET
        )//secret key

        res.status(200)
        .json({
            success:true,
            message:"user login successfull vishal",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.name,
                phome:user.phone,
                role:user.role
            }
        })

 
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
    }

};

const adminSignup= async (req,res)=>{
    const {username,password}=req.body;

    try {

        let admin= await Admin.findOne({username});

        if(admin)
            return res.status(400)
            .json({
                success:false,
                message:"Please try with different username"
            });
        
         const securePassword=await bcrypt.hash(password,10);

         admin= new Admin({
            username,
            password:securePassword,
         });

         await admin.save()

         return res.status(201)
         .json({
            success:true,
            message:"admin signup successfully"
         });

        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
};

const adminLogin=async (req,res)=>{
    const {password,username}=req.body;

    try {
        const admin = await Admin.findOne({username});

        if(!admin)
            return res.status(400)
        .json({
            success:false,
            message:"Please try with anothe username"
        });

        const compairPassword = await bcrypt.compare(password,admin.password)

        if(!compairPassword)
            return res.status(400)
            .json({
                success:false,
                message:"invalid credentials"
            });

        const token= jwt.sign({id:admin._id,role:admin.role},
            process.env.JWT_SECRET,{
                expiresIn:"1d"
            }
        );

        return res.status(200)
        .json({
            success:true,
            message:"Admin is loged in ",
            token,
            admin:{
                id:admin._id,
                username:admin.username,
                role:admin.role,
            }
        });
        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
        
    }

}

export  {signup, login,adminSignup,adminLogin};