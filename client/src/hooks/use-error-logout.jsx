import { setUserLogout } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useErrorLogout=()=>{
    const dispatch=useDispatch();

    const handleErrorLogout=(error,otherTitle="Error occured")=>{
        if(error.response.status===400){
            dispatch(setUserLogout());

            toast.error("Session Expired",)
        }else{
            toast.error(otherTitle)
        }
    };
return {handleErrorLogout};

}

export default useErrorLogout ;