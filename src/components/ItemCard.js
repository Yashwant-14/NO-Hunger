import { CDN_URL } from "../utils/constants";
import veg from "../assets/veg.png"
import Non_veg from "../assets/Non_veg.png"
const ItemCard=({items})=>{
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
                            <div className=" w-[118px] h-[96px] object-cover  overflow-hidden rounded-md ">
                                <img className=" w-[118px] h-[96px] object-cover" src={CDN_URL+itemCards?.card?.info?.imageId}/>
                            </div>
                            
                        </div>
                    )
                })

            }
        </>
    )
}
export default ItemCard;