// import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import useFetchBody from "./useFetchBody";
import Carousel from "./Carousel";
import CarouselRes from "./CarouselRes";
import ShimmerCarousel from "./ShimmerCarousel";



const Body=()=>{
  const[listOfRestraunt,setListOfRestraunt]=useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [carouselResData, setCarouselResData] = useState([]);
  const data=useFetchBody();
   
  useEffect(() => {
    if (data) {
      console.log(data,"BodyData");
      setFilteredRes(data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
      setListOfRestraunt(data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
      setCarouselData(data?.cards[0]?.card?.card.gridElements?.infoWithStyle?.info)
      setCarouselResData(data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)
    }
  }, [data]);
  

  const onlineStatus=useOnlineStatus();


  if(!onlineStatus){
    return (
    <h1>You are offline</h1>);
  }
  else{
  if(listOfRestraunt.length==0){
    return( 
      <div>
         <ShimmerCarousel/>
         <Shimmer />
      </div>
     );
  }
  
    return(
        <div className="body ml-[170.297] mr-[170.297]   ">

            
            <div className="container mx-auto p-4 flex  items-center ">
            <Filter className="mr-10" listOfRestraunt={listOfRestraunt} setListOfRestraunt={setListOfRestraunt}/>
              <SearchBar className="mr-36S" listOfRestraunt={listOfRestraunt} setListOfRestraunt={setListOfRestraunt} filteredRes={filteredRes} setFilteredRes={setFilteredRes}/>
          
          </div>
          <div><Carousel carouselData={carouselData}/></div>

          <CarouselRes carouselResData={carouselResData}/>
            
            
               {console.log("rendered-body")}
               <div>
                <div>
                <h1 className="font-bold text-2xl shadow-sm mt-5">Restaurants with online food delivery for You</h1>
                </div>
               <div className="res-container flex justify-between flex-wrap mt-7">
              
              {
              filteredRes.map((restaurant)=>{
                return (<Link style={{textDecoration:"none"}} key={restaurant.info.id} to={"/resturants/"+ restaurant.info.id}><RestaurantCard  info={restaurant}/>
                </Link>)})
            }
             
     
          </div>
               </div>
            
        </div>
    );}
};
export default Body;