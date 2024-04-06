import React from "react";
import Header from "../../components/header/Header.js";
import Navbar from "../../components/navbar/Navbar.js";
import { useLocation } from "react-router-dom";
import {useState} from "react";
import {format} from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem.js";
import "./list.css";
const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [chosenVal, setChosenVal] = useState('');

    const handleVal = (event) => {
        setChosenVal(event.target.value);
    }

    const hotelChains = [
        {id: 1, hotelChain:""},
        {id: 2, hotelChain: "Marriott"},
        {id: 3, hotelChain: "Travelodge"},
        {id: 4, hotelChain: "Delta"}
    ];

    return(
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to
                             ${(format(date[0].endDate, "MM/dd/yyyy"))}`}</span>
                            { openDate && (
                            <DateRange 
                            onChange={(item) =>setDate([item.selection])}
                            minDate= {new Date()}
                            ranges={date}
                            />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Hotel Chain</label>
                            <select onChange={handleVal} value={chosenVal} className="">
                                {hotelChains.map((hotelChain,index) => (
                                    <option key={index}className="lsOptionText" value="">{hotelChain.hotelChain}</option>
                                ))}
                            </select>
                        </div>
                        <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                    </div>
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                    </div>
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.adult}
                                    />
                                    </div>
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={options.children}
                                    />
                                    </div>
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                    </div>
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Hotel Total Rooms
                                    </span>
                                    <input type="number" className="lsOptionInput"
                                        min={1}
                                        />
                                    </div>
                                    
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Hotel Category
                                        </span>
                                        <div className="lsOptionInput">
                                            <select onChange={handleVal} value={chosenVal}>
                                                <option className="lsOptionText" value=""></option>
                                                <option className="lsOptionText" value="1">1</option>
                                                <option className="lsOptionText" value="2">2</option>
                                                <option className="lsOptionText"  value="3">3</option>
                                                <option className="lsOptionText" value="4">4</option>
                                                <option className="lsOptionText" value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <button>Search</button>
                            </div>
                                        <div className="listResult">
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                            <SearchItem />
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}


export default List;