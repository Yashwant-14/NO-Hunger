
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import emptyCart from "../assets/emptyCart.png";
import { Link } from "react-router-dom";
const Cart=()=>{
    const cartItems= useSelector((store)=> store?.cart?.items);
    console.log(cartItems);
    return (
        cartItems.length==0?
        <div className="flex justify-center items-center h-[100vh] w-[100vw]">
            <div className=" h-[100vh] w-[50vw] flex-col  items-center mt-[10vh]">
            <img className="h-[50vh] w-[25vw] mx-auto" src={emptyCart}/>
            <div className=" text-2xl font-bold text-gray-700 flex justify-center mt-5 "><span>Your cart is empty</span></div>
            <div className="  text-gray-500  flex justify-center mt-2"><span>You can go to home page to view more restaurants</span></div>
            <div className="flex justify-center mt-2">
                <Link to={"/"}>
            <button className="h-[8vh] w-[30vw] bg-blue-600 text-lg font-bold text-white transition-transform transform duration-300 ease-in-out hover:scale-110">SEE RESTAURANTS NEAR YOU</button>
                </Link>
            </div>


            </div>
        </div>:
        <div> 
           <CartItems items={cartItems}/>
        </div>
    );
}
export default Cart;