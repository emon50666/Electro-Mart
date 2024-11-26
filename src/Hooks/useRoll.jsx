
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRoll = () => {
const {user,loading} = useAuth()

const axiosPublic = useAxiosPublic();
const {data:role = [''],isLoading} = useQuery({
    queryKey:['role',user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async()=>{
        const {data} = await axiosPublic.get(`/user/${user?.email}`)
        return data.role
    }
})

// fetch user info using logged user email

return [role,isLoading] ;   
};

export default useRoll;