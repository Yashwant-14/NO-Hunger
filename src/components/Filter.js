// creating a functional component called Filter which will filter the restaurant on the basis of ratings
import { useState } from "react";

const Filter= ({listOfRestraunt,setListOfRestraunt})=>{
    //const [listOfRestraunt,setListOfRestraunt]= useState(resObj);
    return (
        <button className="filter_button justify-center mt-3 border-2 py-2 px-5  rounded-xl bg-blue-300 shadow-lg"onClick={()=>{
            const filteredList= listOfRestraunt.filter((x)=>{
                
                return x.info.avgRating>4;
            })
            console.log(filteredList);
            setListOfRestraunt(filteredList);
        }} >Filter</button>
    );


}

export default Filter;