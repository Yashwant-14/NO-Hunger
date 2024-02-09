import { useEffect,useState } from "react";

const useFetchBody=()=>{

    const[resData,setResData]=useState(null);
    
    useEffect(()=>{
        fetchData();
        console.log(resData,"dataFetch");
    },[]);

    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.480674808313108&lng=88.41162795767212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();
        // setListOfRestraunt(json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRes(json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
        setResData(json?.data);
        
    }
    return resData;
    

}
export default useFetchBody;