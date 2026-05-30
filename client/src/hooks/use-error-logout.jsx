import { setUserLogout } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useErrorLogout=()=>{
    const dispatch=useDispatch();

    const handleErrorLogout=(error,otherTitle="Error occured")=>{
        if(error.response.status===401){
            dispatch(setUserLogout());

            toast.error("Session Expired",)
        }else{
            toast.error(otherTitle)
        }
    };
return {handleErrorLogout};

}

export default useErrorLogout ;