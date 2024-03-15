import { useEffect, useState } from "react";
import useFetchBody from "./useFetchBody";
import { COROUSEL_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCarouselCard from "./RestaurantCarouselCard";
import { Link } from "react-router-dom";

const CarouselRes= ({carouselResData})=>{
    
    
    const[itemDisplay,setItemDisplay]=useState([]);
    

    const[startIndx, setStartIndx]= useState(0);
    const[endIndx, setEndIndx]= useState(2);
    

    useEffect(()=>{
        const arr=[]
        for(let i=startIndx;i<=endIndx;i++){
            arr.push(carouselResData[i]);
        }
        setItemDisplay(arr);
       

    },[startIndx,endIndx]);

    const handlerNext=()=>{
        
        setStartIndx((startIndx+2)%carouselResData.length);
        setEndIndx((endIndx+2)%carouselResData.length);
        console.log(startIndx);
        console.log(endIndx);
    }
    const handlerPrev=()=>{
        setStartIndx((startIndx-2)%carouselResData.length);
        setEndIndx((endIndx-2)%carouselResData.length);
        console.log(startIndx);
        console.log(endIndx);
    }
    return (itemDisplay.length===0)? <Shimmer/>:(
        <div  className="carousel-container  w-[1002.41] h-[379.8px] p-[1px] border-b-2 mx-auto">
            <div className="flex justify-center items-center justify-between ">
                <h1 className="font-bold text-2xl shadow-sm">Top restaurant chains</h1>
            <div className="slider-control flex  mr-6 "> 

            <button className="m-2 border rounded-full p-1 w-8 font-extrabold shadow-lg bg-gray-200 transition-transform transform duration-300 ease-in-out hover:scale-110" onClick={()=>{
                if(startIndx-2>=0){
                    console.log("prev")
                handlerPrev();} 
            }}>⇽</button>
            <button className="m-2 border rounded-full p-1 w-8 font-extrabold shadow-lg bg-gray-200 transition-transform transform duration-300 ease-in-out hover:scale-110" onClick={()=>{
                if(endIndx+2%carouselResData.length<carouselResData.length){
                    console.log("next")
                handlerNext();}
            }}>⇾</button>

            </div>
            </div>
            
            <div className=" item-container flex flex-wrap justify-between ml-6 mr-6  ">
            {
                itemDisplay.map((restaurant)=>{
                    
                        return (<Link style={{textDecoration:"none"}} key={restaurant.info.id} to={"/resturants/"+ restaurant.info.id}><RestaurantCarouselCard  info={restaurant}/>
                </Link>)})

                       
                    
                    
            }
            </div>
           
        </div>
    );
}
export default CarouselRes;