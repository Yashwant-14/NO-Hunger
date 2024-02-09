import { CDN_URL } from "../utils/constants";
const RestaurantCarouselCard = (props) => {
    const {info} = props; // Destructuring props to ensure 'info' is defined
    //console.log(info);
    return (
      <div className="res-card  m-2 w-[273px] h-[283.8px]  overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-90 mt-5">
        <div className=" relative w-[273px] h-[182px] rounded-lg  ">
        <img
          className="res-img  w-[273px] h-[182px] rounded-lg object-cover z-0"
          alt="Biryani"
          src={CDN_URL+info.info.cloudinaryImageId}
        />
        <div className="w-[273px] h-[182px]  z-10">
        {
            info.info.aggregatedDiscountInfoV3 ? (
                <div className="item-center absolute bottom-0 w-[273px] h-[90px] font-extrabold text-[22px] text-center  text-white  z-20 truncate bg-gradient-to-t from-black to-transparent mt-11 rounded-lg"><h1 className="truncate pl-1 mt-10">{info.info.aggregatedDiscountInfoV3.header+" "+info.info.aggregatedDiscountInfoV3.subHeader}</h1></div>
            ) : (
                <div className=" rounded-lg item-center absolute bottom-0 w-[273px] h-[182px]  bg-gradient-to-t from-black to-transparent"></div>
            )
        }
    </div>
     
      
        </div>
        <div className="h-[12px]"></div>

        
        <div className="discription-res ml-[12px]">
          <div className="res-name w-[206.61px] h-[24px] ">
            <div className="text-[18px] font-bold text-[#02060CBF] truncate ">{info.info.name}</div>
          </div>

          <div className="rating flex item">
            <div className="text-[15px] font-bold text-[#02060CBF] truncate flex">
              <span className="text-[15px] font-bold text-[#02060CBF] truncate flex">
                <div className="w-10 h-10 object-cover m-[-10px]"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Featured_Star_green.svg " className="scale-50"/></div>
                <span/>{info.info.avgRatingString} ● </span>
              {info.info.sla.slaString}
            </div> 
          </div>

          <div className="cusine-locality ">
            <div className="cusine text-[15px] font-semibold text-[#02060CBF] truncate">{info.info.cuisines.join(", ")}</div>
            <div className="locality text-[15px] font-semibold text-[#02060CBF] truncate">{info.info.locality}</div>
          </div>
        </div>
        
      </div>
    );
  };  
  export default RestaurantCarouselCard;