import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
function Home()
{
    
    return(<div id="homepage">
        <h1>Expenser</h1>
        <p>Share the cost, not the headache with Expenser</p>
        {/* <p>- your ultimate expense splitting solution</p>
        <p>- the easiest way to split expenses with friends and family</p>
        <p>Share expenses hassle-free, use Expenser</p> */}
        <Link to="/member"><button className="btn btn-primary" id="startBtn">Get Started</button></Link>
    </div>);
}
export default Home;