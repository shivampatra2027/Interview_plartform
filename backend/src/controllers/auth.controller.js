import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";
import { success } from "../utils/response.js";

export const register = async (req, res,next) => {
    try {
        const { name, email, password, role = "user" } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory!!"
            });
        }
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists!! try with a new one!"
            });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            role,
            password: passwordHash
        });
        const token = generateToken(user._id);
        return success(
            res,
            {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token,
            },
            "User generated successfully",
            201
        );
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res,next) => {
    try {
        const { email, password } = req.body;
        // we need to check the password is matching with the hashed password in the database..
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email or password field is missing!"
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found in the database..kindly register first!"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Enter the correct password/login id",
            });
        }

        const token = generateToken(user._id);
        return success(
            res,
            {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token,
            },
            "LOGIN SUCCESSFUL"
        );

    } catch (error) {
        next(error);
    }
}

export const getMe = async (req, res, next) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    return success(res, { user: req.user }, "User fetched successfully");
  } catch (error) {
    next(error);
  }
};