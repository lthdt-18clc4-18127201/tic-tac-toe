import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormLoginInput, LoginSchema } from "../schemas/LoginSchema";
import useAuthStore from "../store/useAuthStore";
import axiosInstance from "../utils/axiosInstance";


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormLoginInput>({
        resolver: zodResolver(LoginSchema),
    });
    const login = useAuthStore((state)=> state.login);
    const navigate = useNavigate();

    const submitForm = async (data: IFormLoginInput) => {
        try {
            const res = await axiosInstance.post(`/api/auth/login`, data);
            const { token } = res.data;
            alert("Login successfully");
            login(token);
            navigate('/');
        } catch (error) {
            alert("Failed to login, please try again");
            console.log(error);
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center font-display">
            <div className="min-h-[400px] w-[350px] rounded-xl bg-cyan-700 border border-slate-700 p-6 gap-4">
                <div className="flex justify-center items-center flex-col gap-6">
                    <h1 className="text-5xl">Login Page</h1>
                    <span>Start a new journey account</span>
                </div>
                <form 
                    onSubmit={handleSubmit(submitForm)} 
                    className="flex flex-col w-full gap-4"
                >
                    <div className="grid grid-rows-1 gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        className="h-8 rounded bg-slate-100 px-2"
                        />
                        {errors.email && <p className="text-red-700">Email is required</p>}
                    </div>
                    <div className="grid grid-rows-1 gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                        id="password"
                        type="password"
                        {...register("password", { required: true, minLength: 3 })}
                        className="h-8 rounded bg-slate-100 px-2"
                        />
                        {errors.password && <p className="text-red-700">Password min length is 3</p>}
                    </div>
                    <button 
                        type="submit" 
                        className="border bg-slate-500 border-slate-500 mt-6 h-8 hover:bg-slate-200 text-white hover:text-black rounded cursor-pointer"
                    >
                        Login
                    </button>
                </form>
                <div className="flex justify-center items-center mt-10">
                    You haven't got an account?
                    <Link to="/register" className="underline px-2 hover:text-white">Go to register</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage