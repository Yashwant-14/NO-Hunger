import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header.js";
import Body from "/src/components/Body.js";
import About from "./components/About";
import Contact from "./components/Contact";
import {Filter} from "./components/Filter";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Footer from "./components/Footer";


/**
 * Header
 * -logo
 * -Nav Items
 * Body
 * -search
 * -Restaurant Container
 * -Resturant Card
 * footer
 * -copyright
 * -links
 * -Address
 * -Contact
 */

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            {/* <Filter/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

const AppRoute= createBrowserRouter(
    [
        {
            path:"",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>,

                },
                {
                    path:"/about",
                    element:<About/>, 
                },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path:"/resturants/:resId",
                element: <ResturantMenu/>,
            } 
            ],
            errorElement: <Error/>
        },
       
    
]);



const root= ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={AppRoute}/>);//this is how we render react functional component
