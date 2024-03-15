import { CDN_URL } from "../utils/constants";
import veg from "../assets/veg.png"
import Non_veg from "../assets/Non_veg.png"
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const CartItems=({items})=>{

    const dispatch= useDispatch();
    const handleAddItems=(itemCards)=>{
        //dispatch an action 
        dispatch(addItems(itemCards));
       

    };
    return (
        <>
        {
                items?.map((itemCards)=>{
                    return(

                        <div key={itemCards?.card?.info?.id} className="h-[80px] flex justify-between ml-[22vw] mr-[22vw] my-auto mt-8 mb-6  border-b-2">
                            <div className="flex">
                                <div className="  w-[80px] h-[60px]   overflow-hidden rounded-md relative mr-2">
                                <img className=" w-[80px] h-[60px] object-cover " src={CDN_URL+itemCards?.card?.info?.imageId}/>
                                <button className="font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2  w-[118px] h-10  bg-gradient-to-t from-black to-transparent rounded-md   text-green-500 shadow-2xl border-black object-center" onClick={()=>handleAddItems(itemCards)}>ADD</button>
                                </div>

                            <div className="h-[120px] w-[624px] ml-2 ">
                            <div>{itemCards?.card?.info?.itemAttribute?.vegClassifier=="VEG"?<div className="w-4"><img src={veg}/></div>:<div className="w-[20px]"><img src={Non_veg}/></div>}</div>
                            <div className="font-bold">{itemCards?.card?.info?.name}</div>
                           
                            </div>
                            </div>
                            
                            <div className="text-sm">₹{itemCards?.card?.info?.price?itemCards?.card?.info?.price/100:itemCards?.card?.info?.defaultPrice/100}</div>
                           
                            
                        </div>
                    )
                })

            }
        </>
    )
}
export default CartItems;