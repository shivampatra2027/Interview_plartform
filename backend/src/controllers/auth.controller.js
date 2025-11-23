import bcrypt from "bcryptjs";
import { User } from "..models/user.model.js"
import {generateToken} from "utils/jwt.js";
import {success,failure} from "../utils/response.js"

export const register = async()=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are manditory!!"
            })
        }
        const existing = await User.findOne({email});
        if(existing){
            return res.staus(400).json({success:false,
                message:"email already exist!! try with a new one!"});
        }
        const salt = bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt);
        const user = await User.create({
            name,
            role,
            passwordHash
        });
        const token =generateToken(user._id);
        return res.success(res,{
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            },
            token,
        },
    "User generated succesfully",201);
    } catch (error) {
        return res.status(401).json({
            sucess:false,
            message:"Some error has occured in the auth register controller.."
        });
    }
}
