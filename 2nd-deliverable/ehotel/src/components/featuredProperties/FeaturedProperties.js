import React from "react";
import "./featuredProperties.css";
import Photo from "../OIP.jpg";
const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img className="fpImg" alt="great hotel" src ={Photo}/>
                <span className="fpName">HellHotel</span>
                <span className="fpCity">Ottawa</span>
                <span className="fpPrice">Starting from $48,733</span>
                <div className="fpRating">
                    <button>1.7</button>
                    <span>Terrible!</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" alt="great hotel" src ={Photo}/>
                <span className="fpName">HellHotel</span>
                <span className="fpCity">Ottawa</span>
                <span className="fpPrice">Starting from $48,733</span>
                <div className="fpRating">
                    <button>4.1</button>
                    <span>Terrible!</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" alt="great hotel" src ={Photo}/>
                <span className="fpName">HellHotel</span>
                <span className="fpCity">Ottawa</span>
                <span className="fpPrice">Starting from $48,733</span>
                <div className="fpRating">
                    <button>2.5</button>
                    <span>Terrible!</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg"  alt="great hotel" src ={Photo}/>
                <span className="fpName">HellHotel</span>
                <span className="fpCity">Ottawa</span>
                <span className="fpPrice">Starting from $48,733</span>
                <div className="fpRating">
                    <button>2.6</button>
                    <span>Terrible!</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties;