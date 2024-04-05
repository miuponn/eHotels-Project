import React from "react";
import "./signup.css";
import {Link} from "react-router-dom"

const Signup = () => {
    return(
    <div className="signup-container">    
            <div className="signup-box">    
                    <div className="signup-header">
                        <header>Sign up</header>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="Email" autocomplete="off" required></input>

                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="Password" autocomplete="off" required></input>
                    </div>
                    <div className="space">
                    </div>
                    <div className="input-submit">
                        <button className="submit-btn" id="submit"></button>
                        <label for="submit">Sign up</label>
                    </div>

                    <div className="login-link">
                        <p>Already have an account? <Link href="/login">Login here</Link></p>
                    </div>
                </div>
            </div>
    );
};

export default Signup;