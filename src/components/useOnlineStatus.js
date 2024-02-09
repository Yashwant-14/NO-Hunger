import { useEffect ,useState} from "react";

const useOnlineStatus=()=>{
    const[onlinStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[]);
    return onlinStatus;
}
export default useOnlineStatus;