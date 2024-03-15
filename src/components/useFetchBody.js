import { useEffect,useState } from "react";
import { generateProxyUrl } from "../utils/constants";


const useFetchBody=()=>{

    const[resData,setResData]=useState(null);
    const resource= "https://corsproxy.org/?"+ encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.586855&lng=88.290717&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    useEffect(()=>{
        fetchData();
        console.log(resData,"dataFetch");
    },[]);

    const fetchData=async()=>{
        const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();
        // setListOfRestraunt(json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRes(json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
        setResData(json?.data);
        console.log(json);
        
    }
    return resData;
    

}
export default useFetchBody;