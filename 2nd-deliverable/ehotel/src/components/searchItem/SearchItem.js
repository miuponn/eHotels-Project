import React from "react";
import Photo from "../Designer.png";
import Photo1 from "../OIP.jpg";

import "./searchItem.css";
const SearchItem = () => {
    return(
        <div className="searchItem">
            <img 
            src={Photo1}
            alt="hotel"
            className="elemImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Hotel Hell Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Jail cell with other homeless people
                </span>
                <span className="siFeatures">
                    Gym hall, public bathroom, 1 bed, 400m² 1 single bed
                </span>
                <span className="siCancelOp">Paid Cancellation, $700</span>
                <span className="siCancelOpSubtitle">You can cancel, just pay.</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Terrible!</span>
                    <button>1.3</button>
                </div>
                <div className="siDetailTexts">
                <span className="siPrice">$14,728</span>
                <span className="siTaxOp">Does not include taxes and fees</span>
                <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}


export default SearchItem;