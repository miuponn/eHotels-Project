import React from "react";
import "./featured.css";
import Photo from "../OIP.jpg";
import Photo1 from "../tokyo-tower-0u.jpg";

const Featured = () => {
    return (
        <div className="featured">
           <div className="featuredItem">
                <img src={Photo1} alt="hotel"className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>CSI 2132 classroom</h1>
                    <h2>MRT 203</h2>
                </div>
           </div>
           <div className="featuredItem">
                <img src={Photo1} alt="hotel"className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>CSI 2101 classroom</h1>
                    <h2>SCR 001</h2>
                </div>
           </div>
           <div className="featuredItem">
                <img src={Photo1} alt="hotel"className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>CSI 2101 classroom</h1>
                    <h2>SCR 001</h2>
                </div>
           </div>
        </div>
    )
}


export default Featured;