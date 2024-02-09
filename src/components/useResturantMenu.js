import { useEffect, useState } from "react";
import { MENU_DATA } from "../utils/constants";

const useResturantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
    const fetchMenu= async()=>{
        const data= await fetch(MENU_DATA+resId);
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