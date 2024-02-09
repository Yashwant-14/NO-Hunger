import User from "./User"
import { useState } from "react";
const About= ()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>This is the about page</h1>
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increment Count</button>
            <User/>
        </div>
    )
}
export default About;