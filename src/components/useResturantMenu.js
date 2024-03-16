import { useEffect, useState } from "react";
import { MENU_DATA } from "../utils/constants";
import { generateProxyUrl } from "../utils/constants";

const useResturantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
    //const resource= MENU_DATA+resId;
    const resource = generateProxyUrl(MENU_DATA+resId);
    const fetchMenu= async()=>{
        const data= await fetch(resource);
        const json= await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    useEffect(()=>{
        fetchMenu();
    },[]);
    return resInfo;

}
export default useResturantMenu;