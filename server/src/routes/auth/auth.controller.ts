import { Request, Response } from "express"; 
import userModel from "../../models/user.model";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function register(req: Request, res: Response):Promise<any> {
    try {
        const user = req.body;
        const { username, email, password } = user;

        // check if email is already existed
        const emailAlreadyExist = await userModel.findOne({ email: email });

        if (emailAlreadyExist) {
            res.status(400).json({
                status: 400,
                message: "Email is already in use",
            });
            return;
        }

        const newUser = new userModel({
            username: username,
            email: email,
            password: await bcrypt.hash(password, await bcrypt.genSalt()),
        });
        await newUser.save();

        return res.json({
            status: 201,
            success: true,
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error: any) {
        return res.status(400).json({
            status: 400,
            message: error.message.toString(),
        })
    }

}

export async function login(req: Request, res: Response): Promise<any> {
    try {
        const { email, password } = req.body;

        const isExistUser = await userModel.findOne({ email: email });

        if (!isExistUser) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
            });
            return;
        }
        const checkPass = await bcrypt.compare(password, isExistUser?.password);

        if (!checkPass) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "Wrong password"
            });
            return;
        }

        const token = jwt.sign(
            { _id: isExistUser?._id, email: isExistUser?.email },
            `${process.env.JWT_SECRET}`
        )

        res.json({
            token: token,
        });
    } catch (error: any) {
        return res.status(400).json({
            status: 400,
            message: error.message.toSting(),
        });
    }
}