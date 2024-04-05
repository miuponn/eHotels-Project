import React from "react";
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const New = ({inputs, title}) => {
    return(
        <div className="new">
            <Sidebar />
            <div className="new-container">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <AccountCircleIcon className="profile-img"/>
                    </div>
                    <div className="right">
                        <form>
                            <div className="form-input">
                                <div className="subheading">Enter the information below</div>
                            </div>

                            {inputs.map(input => (
                                <div className="form-input" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}></input>
                            </div>
                            ))}
                            <button>submit</button>
                        </form>
                    </div>
                </div>
                test
            </div>
        </div>
    )
};

export default New;