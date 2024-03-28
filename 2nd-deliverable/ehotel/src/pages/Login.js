import React from "react";



function Login() {
    return(
        <div className="login-container">
            <form classNae="login-form">        
                <div className="user-info">
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="password" required/>
                    <label for="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter Password" name="password" required/>
                    <button type="submit">Login</button>
                </div>
            </form>
        <div>   
            <p>Don't have an account? <a href="/signup">Sign up here.</a></p>
            </div>
        </div>
    );
}

export default Login;