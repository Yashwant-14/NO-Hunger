
import { useState } from "react";
import ItemCard from "./ItemCard";

const ItemCatagory=({catagoryItems,indx})=>{

    const[showList,setShowList]=useState(true);
    
    

    const handleClick=()=>{
        setShowList(!showList);
    }

    return (
        <div>
            {/* Header */}
            
            <div className=" flex justify-between h-[52px] ml-[16px] mr-[16px] border-b-2 border-gray-300 p-2 cursor-pointer shadow-lg "  onClick={handleClick}>
            
                <div className=" font-bold text-md cursor-pointer mb-4">{catagoryItems?.title}({catagoryItems?.itemCards.length})</div>
                <div className="text-[20px] font-thin">{ showList?<>△</>:<>▽</> }</div>
                
            </div>
            {
                showList?<ItemCard items={catagoryItems}/>:<></> 
            }
            
        </div>
        
       

    );
}
export default ItemCatagory;