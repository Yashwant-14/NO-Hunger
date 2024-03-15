import { CDN_URL } from "../utils/constants";
import veg from "../assets/veg.png"
import Non_veg from "../assets/Non_veg.png"
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemCard=({items})=>{

    const dispatch= useDispatch();
    const handleAddItems=(itemCards)=>{
        //dispatch an action 
        dispatch(addItems(itemCards));
       

    };
    return (
        <>
        {
                items?.itemCards.map((itemCards)=>{
                    return(
                        <div key={itemCards?.card?.info?.id} className="h-[140px] flex justify-between ml-[16px] mr-[16px] my-auto mt-8 mb-6  border-b-2">
                            <div className="h-[120px] w-[624px] ">
                            <div>{itemCards?.card?.info?.itemAttribute?.vegClassifier=="VEG"?<div className="w-4"><img src={veg}/></div>:<div className="w-[20px]"><img src={Non_veg}/></div>}</div>
                            <div className="font-bold">{itemCards?.card?.info?.name}</div>
                            <div className="text-sm">₹{itemCards?.card?.info?.price?itemCards?.card?.info?.price/100:itemCards?.card?.info?.defaultPrice/100}</div>
                            <div className="text-xs text-gray-400">{itemCards?.card?.info?.description ? itemCards?.card?.info?.description : " " }</div>

                            </div>
                            <div className="  w-[118px] h-[96px]   overflow-hidden rounded-md relative">
                                <img className=" w-[118px] h-[96px] object-cover " src={CDN_URL+itemCards?.card?.info?.imageId}/>
                                <button className="font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2  w-[118px] h-10  bg-gradient-to-t from-black to-transparent rounded-md   text-green-500 shadow-2xl border-black object-center" onClick={()=>handleAddItems(itemCards)}>ADD</button>
                            </div>
                            
                        </div>
                    )
                })

            }
        </>
    )
}
export default ItemCard;