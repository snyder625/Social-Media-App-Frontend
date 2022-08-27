import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt=""/>
            <div className="webName">
                <h1>Twittogram</h1>
                <h6>Connect with people throughout the world</h6>
            </div>
        </div>
        <SignUp />
    </div>
  )
}

function LogIn() {
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>
                <div>
                    <input type="text" placeholder="Username" 
                    className="FormInput" name="username"/>
                </div>
                <div>
                    <input type="password" placeholder="Password" 
                    className="FormInput" name="password"/>
                </div>
                <button className="Button SignUpButton" type="submit">Log In</button>
                <div>
                    <span style={{fontSize: '15px'}}>Don't have an account yet? Sign Up</span>
                </div>

            </form>
        </div>
    )
}

function SignUp() {
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder="First Name" 
                    className="FormInput" name="firstname"/>
                    <input type="text" placeholder="Last Name" 
                    className="FormInput" name="Lastname"/>
                </div>
                <div>
                    <input type="text" placeholder="Username" 
                    className="FormInput" name="username"/>
                </div>
                <div>
                    <input type="password" placeholder="Password" 
                    className="FormInput" name="password"/>
                    <input type="password" placeholder="Confirm Password" 
                    className="FormInput" name="confirmpassword"/>
                </div>

                <button className="Button SignUpButton" type="submit">Sign Up</button>
                
                <div>
                    <span style={{fontSize: '15px'}}>Already have an account? Login</span>
                </div>

            </form>
        </div>
    )
}

export default Auth