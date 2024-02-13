// creating a functional component called Filter which will filter the restaurant on the basis of ratings
import { useState } from "react";

const Filter= ({listOfRestraunt,filterRes,setFilteredRes})=>{
    //const [listOfRestraunt,setListOfRestraunt]= useState(resObj);
    return (
        <button className="filter_button justify-center mt-3 border-2 py-2 px-5  bg-white  rounded-full shadow-md"onClick={()=>{
            const filteredList= listOfRestraunt.filter((x)=>{
                
                return x.info.avgRating>4;
            })
            console.log(filteredList);
            setFilteredRes(filteredList);
        }} >Rated 4.0+</button>
    );


}

export default Filter;