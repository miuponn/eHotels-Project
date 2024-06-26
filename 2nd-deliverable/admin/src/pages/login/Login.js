import React from "react";
import "./login.css";
import {Link} from "react-router-dom";


const Login = () =>{
    return(
            <div className="login-container">    
                <div className="login-box">    
                        <div className="login-header">
                            <header>Login</header>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" placeholder="Email" autocomplete="off" required></input>

                        </div>
                        <div className="input-box">
                            <input type="password" className="input-field" placeholder="Password" autocomplete="off" required></input>
                        </div>
                        <div className="input-submit">
                            <button className="submit-btn" id="submit"></button>
                            <label for="submit">Login</label>
                        </div>
                        <div className="sign-up-link">
                            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
                        </div>
                    </div>
                </div>
    );
}

export default Login;
 