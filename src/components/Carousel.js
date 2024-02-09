import { useEffect, useState } from "react";
import useFetchBody from "./useFetchBody";
import { COROUSEL_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import ShimmerCarousel from "./ShimmerCarousel"

const Carousel= ({carouselData})=>{
    
    console.log(carouselData,"carouselData")
    const[itemDisplay,setItemDisplay]=useState([]);
    

    const[startIndx, setStartIndx]= useState(0);
    const[endIndx, setEndIndx]= useState(5);
    

    useEffect(()=>{
        const arr=[]
        for(let i=startIndx;i<=endIndx;i++){
            arr.push(carouselData[i]);
        }
        setItemDisplay(arr);
       

    },[startIndx,endIndx]);

    const handlerNext=()=>{
        
        setStartIndx((startIndx+3)%carouselData.length);
        setEndIndx((endIndx+3)%carouselData.length);
        console.log(startIndx);
        console.log(endIndx);
    }
    const handlerPrev=()=>{
        setStartIndx((startIndx-3)%carouselData.length);
        setEndIndx((endIndx-3)%carouselData.length);
        console.log(startIndx);
        console.log(endIndx);
    }
    return (itemDisplay.length===0)? <></>:(
        <div  className="carousel-container  w-[1002.41] h-[256] p-[1px] border-b-2 ">
            <div className="flex justify-center items-center justify-between ">
                <h1 className="font-bold text-2xl shadow-sm">What's on your mind?</h1>
            <div className="slider-control flex  mr-6 "> 

            <button className="m-2 border rounded-full p-1 w-8 font-extrabold shadow-lg bg-gray-200 transition-transform transform duration-300 ease-in-out hover:scale-110" onClick={()=>{
                if(startIndx-3>=0){
                    console.log("prev")
                handlerPrev();} 
            }}>⇽</button>
            <button className="m-2 border rounded-full p-1 w-8 font-extrabold shadow-lg bg-gray-200 transition-transform transform duration-300 ease-in-out hover:scale-110" onClick={()=>{
                if(endIndx+3%carouselData.length<carouselData.length){
                    console.log("next")
                handlerNext();}
            }}>⇾</button>

            </div>
            </div>
            
            <div className=" item-container flex flex-wrap justify-between ">
            {
                itemDisplay.map((itemContent)=>{
                    return(
                        <div key={itemContent.id} className="w-[144px] h-[180px]   transition-transform transform duration-300 ease-in-out hover:scale-110">
                        <img src={COROUSEL_URL + itemContent.imageId} className="w-[144px] h-[180px]" alt={`Image ${itemContent.id}`} />
                      </div>
                      
                    )

                })
            }
            </div>
           
        </div>
    );
}
export default Carousel;