import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import {  useParams } from "react-router-dom";
import { MENU_DATA } from "../utils/constants";
import useResturantMenu from "./useResturantMenu";
import ItemCatagory from "./ItemCatagory";
import delivery from "../assets/delivery.png";


const ResturantMenu = () =>{
    const {resId}= useParams()
    console.log (resId);
  
    const resInfo=useResturantMenu(resId);
    console.log("ResturantMenu_Rendered");
    const resName = resInfo?.cards[2]?.card?.card?.info ||{};

    const resItems= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||{};

    const catagoryItems= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>{
         return e?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";


    });
    console.log(catagoryItems ,"catagoryItems");


    return (resInfo=== null)?(<Shimmer/>) : (
        <div className="RestaurantMenu w-[800px] mx-auto mt-11">
            
            <div className="RestaurantHeader-Container mr-[16px] ml-[16px] border-b-2 pb-6">
                <div className="RestaurantHeader-Wrapper flex justify-between">
                    <div className="RestaurantName">
                        <div className="resName-Cuisines">
                            <p className="font-bold text-xl">{resName.name}</p>
                            <p className="text-xs text-gray-400">{resName.cuisines.join(",")}</p>
                        </div>
                        <div className="text-xs text-gray-400">{resName.areaName}, {resName.sla.lastMileTravelString}</div>
                    </div>
                    <div className="resRating flex flex-col w-[63px] h-[70px] border p-2 rounded-md shadow-md cursor-pointer">
                        <span className="font-bold pb-2 border-b">{resName.avgRatingString}⭐</span>
                        <span className="text-[7px] mt-2 font-semibold">{resName.totalRatingsString}</span>
                    </div>
                </div>
                <div>
                    <ul className="flex text-sm text-gray-400">
                        <li className="mr-10 text-sm font-bold flex  "><><img src={delivery} className="w-[22px]  mr-2"/></>{resName.sla.slaString} | {resName.costForTwoMessage}</li>
                        
                    </ul>
                </div>
                
            </div>

            {catagoryItems.map((x,index)=>{
                return(
                    <ItemCatagory 
                    key={x?.card?.card?.title} 
                    catagoryItems={x?.card?.card}
                    indx={index}
                    />
                )
            })}
            
        </div>
    );
}
export default ResturantMenu;