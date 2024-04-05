import React from "react";
import "./propertyList.css";
import Photo from "../OIP.jpg";


const PropertyList = () => {
    return(
        <div className="pList">
            <div className="pListItem">
            <img src={Photo}className="pListImg" alt="chain" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
            <img src={Photo}className="pListImg" alt="chain" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
            <img src={Photo}className="pListImg" alt="chain" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
            <img src={Photo}className="pListImg" alt="chain" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
        </div>
    )
}


export default PropertyList;