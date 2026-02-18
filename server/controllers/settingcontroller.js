import ROLE from "../utils/constants.js";
import Admin from "../models/Admin.js";
import bcrypt from 'bcrypt';



const changeUsername=async(req ,res)=>{

    if(req.role !== ROLE.admin){
        return res.status(401)
        .json({
            success:false,
            message:"Access Denied"
        })
    };

    try {

        const {previousUsername,newUsername}=req.body;

        console.log(req.body)

        if(!newUsername){
            return res.status(400)
            .json({
                success:false,
                message:"username name for changed is required"
            })
        };

        const user= await Admin.findOneAndUpdate({
         username:previousUsername},
        {username:newUsername},
        {new:true})


        if(!user){
            return res.status(404)
            .json({
                success:false,
                message:"user name dosent exit"
            })
        };

        return res.status(200) 
        .json({
            success:true,
            message:`new user name is ${user.username}`,
            user:{
                username:user.username,
                role:user.role,
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


const changePassword=async(req,res)=>{

    if(req.role !== ROLE.admin){
        return res.status(400)
        .json({
            success:false,
            message:"Access Denaied"
        })
    };

    try {
        const {username, previousPassword,newPassword}=req.body;

        if(!previousPassword || !newPassword){
            return res.status(400)
            .json({
                success:false,
                message:"Previous and new password is required "
            })
        };

        let user =await Admin.findOne({username});

        if(!user){
            return res.status(404)
            .json({
                success:false,
                message:"user not found"
            })
        };

        const isPasswordValid= await bcrypt.compare(previousPassword,user.password);

        if(! isPasswordValid){
            return res.status(400)
            .json({
                success:false,
                message:"previous password is incorrect"
            })
        };

        const securePassword = await bcrypt.hash(newPassword, 10);

        user.password=securePassword;

        await user.save();

        return res.status(200)
        .json({
            success:true,
            message:"password changed successfully"
        })

        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message
        })
    }

}


export {changeUsername,changePassword};