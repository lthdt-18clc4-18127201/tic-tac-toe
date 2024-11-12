import { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import useUserStore from "../store/useUserStore";
import axiosInstance from "../utils/axiosInstance";

interface Data {
  username: string
  email: string
}

const Profile = () => {
  const token = useAuthStore((state) => state.token);
  const [ data, setData ] = useState<Data>(); 
  const isLoading = useUserStore((state) => state.isLoading);
  const setLoading = useUserStore((state) => state.setLoading);

  useEffect(() => {
    
    const getUserInfoAsync = async (token: string | undefined) => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/users/profile`, {
          headers: {
            'Authorization': `Baerer ${token}`
        }
        });
        setData(res.data.user[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfoAsync(token);
  }, [setLoading, token]);

  return (
    <div className="flex flex-col justify-center items-center font-display">
      <h1 className="text-4xl">Here is the user information</h1>
      <div className="mt-10">
        {
        !isLoading
        ? (
          <ol>
            <ul className="text-3xl">{`Username: ${data?.username}`}</ul>
            <ul className="text-3xl">{`Email: ${data?.email}`}</ul>
        </ol>
        )
        : <p className="loading">Loading... </p>
        }
      </div>
    </div>
  )
}

export default Profile