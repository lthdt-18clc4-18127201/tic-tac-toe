import mongoose from 'mongoose';

export default function connection() {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Connected to MongoDB`)
    } catch (error) {
        return new Error(`Failed to connect to MongoDB`);
    }
}