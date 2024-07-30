import React, { useState } from "react";
import '../assets/css/Signup.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const [showPassword, setShowPassword] = useState(false)

    const validateForm = () => {
        const { name, email, password, confirmpassword } = data;
        if (!name || !email || !password || !confirmpassword) {
            setMessage("All fields are required.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email.");
            return false;
        }
        if (password.length < 6 && !passwordRegex.test(password )) {
            setMessage(" Verify Password must be at least 6 characters long. or Any Specific required is Missing.");
            return false;
        }
        if (password !== confirmpassword) {
            setMessage("Passwords do not match.");
            return false;
        }
        return true;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setMessage("Successful SignUp!!!");
            // You can add further submission logic here
        }
    }
    return (
        <div className="form">
            <form className="signup" onSubmit={handlesubmit}>
                <h1>Sign Up</h1>
                <div className="input_fields">
                    <label htmlFor="usname">User_Roll</label>
                    <input type='text' name="name" id="usname" placeholder="e.g Suveetha..."
                        onChange={handleChange}
                        value={data.name}
                    />
                </div>
                <div className="input_fields">
                    <label htmlFor="email">Email</label>
                    <input type='email' name="email" id="email" placeholder="e.g suveetha@gmail.com..."
                        onChange={handleChange}
                        value={data.email}
                    />
                </div>
                <div className="input_fields">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={handleChange}
                            value={data.password} />
                        <button
                            className="toggle-password"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </button>
                    </div>
                </div>
                <div className="input_fields">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type='password' name="confirmpassword" id="cpassword" placeholder="Confirm Password..."
                        onChange={handleChange}
                        value={data.confirmpassword}
                    />
                </div>
               <div className="but"> <Button variant="contained" type='submit'>Submit</Button></div> 
                {message && <p style={{color:'green'}}>{message}</p>}
                <p style={{ justifyContent: 'space-evenly' }} className="login_link">
                    Existing User? 
                    <Link to="/" style={{color:'white'}}>  Log In</Link>
                </p>
            </form>
        </div>
    );
}
export default SignUp;