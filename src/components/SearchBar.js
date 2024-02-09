import { useState } from "react";

const SearchBar=({listOfRestraunt,setListOfRestraunt,filterRes,setFilteredRes})=>{
    const [searchText, setSearchText] = useState("");
    
    console.log("rendered form search ");
    return(
        
        <div className="flex justify-center " style={{width:'1500px'}}>
            <input type="text" className="border-2 py-3 px-20  rounded-xl mt-3 shadow-lg " placeholder="Search for restaurants and food" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button className=" search-Button p-3 justify-center mt-3 border-2 py-2 px-5  rounded-xl bg-blue-300 shadow-lg" onClick={()=>{
                console.log(searchText);
                const filterRes= listOfRestraunt.filter((x)=>{
                
                    return x.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setFilteredRes(filterRes);
                }
            }>Search</button>

        </div>
    )
}
export default SearchBar;