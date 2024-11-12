import mongoose, { model, Schema } from "mongoose";

export interface UserType {
    username: string
    email: string
    password: string
}

const UserSchema = new Schema<UserType>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

export default model<UserType>('User', UserSchema);