import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import logo from "../assets/logo.png"


const Header=()=>{
    const [btnName, setBtnName] = useState("LogIn");
    const onlineStatus=useOnlineStatus();
    return(
        <div className="flex items-center justify-between bg-green-50 shadow-xl height h-20 ">
            <div className="w-36 marin ml-20 mb-2 ">
                <Link to={"/"}>
                <img className="logo" src= {logo} alt="LOGO"/>
                </Link>
                
            </div>
            <div className="">
                <ul className="flex justify-between m-10 text-md">
                    <li className="m-7 font-semibold">OnlineStatus:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="m-7 font-semibold"><Link to="/">Home</Link></li>
                    <li className="m-7 font-semibold"><Link to="https://www.linkedin.com/in/yashwant-yadav14/">About</Link></li>
                    
                    <li className="m-7 font-semibold">Cart</li>
                    <button className="btn m-7 font-semibold" onClick={()=>{
                        return (btnName=="LogIn")?setBtnName("LogOut"):setBtnName("LogIn");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;