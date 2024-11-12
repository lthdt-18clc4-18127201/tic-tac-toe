import { Request, Response, NextFunction  } from "express";
import userModel from "../../models/user.model";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { ObjectId } from "mongoose";

export async function getAllUSers(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const users = await userModel.find({});
        res.status(200).json({
            status: 200,
            success: true,
            message: "List of all users",
            users: users
        })
        return users;
    } catch (error) {
        res.status(404).json({
            status: 404,
            success: false,
            message: error
        });
        next();
    }
}

export async function getUserInfo(req: CustomRequest, res: Response, next: NextFunction) {
    try {
        const user = await userModel.find({email: req.user?.email});

        if (!user) throw Error(`User not found`);
        res.status(200).json({
            status: 200,
            success: true,
            message: "User information",
            user: user
        })
    } catch (error) {
        res.status(404).json({
            status: 404,
            success: false,
            message: error
        });
        next();
    }
}

export async function deleteAUser(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const { id } = req.params;

        const isExistUser = await userModel.findById(id);

        if (!isExistUser) {
            throw new Error(`User do not exist`);
        };

        const user = await userModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 200,
            success: true,
            message: "User deleted",
        })
        return user;
    } catch (error) {
        res.status(404).json({
            status: 404,
            success: false,
            message: "User not found"
        });
        next();
    }
}