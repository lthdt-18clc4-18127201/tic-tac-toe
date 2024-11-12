import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema, IFormRegisterInput } from '../schemas/RegisterSchema';
import { zodResolver } from "@hookform/resolvers/zod"
import axiosInstance from "../utils/axiosInstance";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormRegisterInput>({
        resolver: zodResolver(RegisterSchema),
    });
    const navigate = useNavigate();

    const submitForm = async (data: IFormRegisterInput) => {
        try {
            const res = await axiosInstance.post(`/api/auth/register`, data);
            console.log(res.data);
            alert("Successful create account");
            navigate("/login");
        } catch (error) {
            alert("Failed to register, please try again");
            console.log(error);
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center font-display">
            <div className="min-h-[400px] w-[350px] rounded-xl bg-cyan-700 border border-slate-700 p-6 gap-4">
                <div className="flex justify-center items-center flex-col gap-6">
                    <h1 className="text-5xl">Register Page</h1>
                    <span>Create a new account</span>
                </div>
                <form 
                    onSubmit={handleSubmit(submitForm)} 
                    className="flex flex-col w-full gap-4"
                >
                    <div className="grid grid-rows-1 gap-2">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            {...register("username", { required: true })}
                            className="h-8 rounded bg-slate-100 px-2"
                        />
                        {errors?.username?.message && (
                            <p className="text-red-700 mb-4">{errors.username.message}</p>
                        )}
                    </div>
                    <div className="grid grid-rows-1 gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", { required: true })}
                            className="h-8 rounded bg-slate-100 px-2"
                        />
                        {errors?.email?.message && (
                            <p className="text-red-700 mb-4">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="grid grid-rows-1 gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", { required: true, minLength: 3 })}
                            className="h-8 rounded bg-slate-100 px-2"
                        />
                        {errors?.password?.message && (
                            <p className="text-red-700 mb-4">{errors.password.message}</p>
                        )}
                    </div>
                    <div className="grid grid-rows-1 gap-2">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input
                            id="confirmpassword"
                            type="password"
                            {...register("confirmpassword", { required: true, minLength: 3 })}
                            className="h-8 rounded bg-slate-100 px-2"
                        />
                        {errors?.confirmpassword?.message && (
                            <p className="text-red-700 mb-4">{errors.confirmpassword.message}</p>
                        )}
                    </div>
                    <button 
                        type="submit" 
                        className="border bg-slate-500 border-slate-500 mt-6 h-8 hover:bg-slate-200 text-white hover:text-black rounded cursor-pointer"
                    >
                        Create account
                    </button>
                </form>
                <div className="flex justify-center items-center mt-10">
                    Already have got an account?
                    <Link to="/login" className="underline px-2 hover:text-white">Go to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage