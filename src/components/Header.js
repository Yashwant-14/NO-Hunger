import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import logo from "../assets/logo.png"


const Header=()=>{
    const [btnName, setBtnName] = useState("LogIn");
    const onlineStatus=useOnlineStatus();
    return(
        <div className="flex items-center justify-between bg-green-200 height h-20 ">
            <div className="w-36 marin m-10 ">
                <img className="logo" src= {logo} alt="LOGO"/>
            </div>
            <div className="">
                <ul className="flex justify-between m-10">
                    <li className="m-7">OnlineStatus:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="m-7"><Link to="/">Home</Link></li>
                    <li className="m-7"><Link to="/about">About</Link></li>
                    <li className="m-7"><Link to="/contact">Contact</Link></li>
                    <li className="m-7">Cart</li>
                    <button className="btn m-7" onClick={()=>{
                        return (btnName=="LogIn")?setBtnName("LogOut"):setBtnName("LogIn");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;