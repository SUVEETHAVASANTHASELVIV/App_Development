// import React, { useState } from "react";
// import '../assets/css/Login.css';
// import Button from '@mui/material/Button';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Link } from "react-router-dom";

// const Loginform = () => {
  
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [errors, setErrors] = useState({});
//     const [showPassword, setShowPassword] = useState(false)

//     const validateForm = () => {
//         const newErrors = {};
//         // Check if fields are filled
//         if (!email) newErrors.email = "Email is required";
//         if (!password) newErrors.password = "Password is required";
//         // Validate email format
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) newErrors.email = "Invalid email format";
//         // Validate password format
//         const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}/;
//         if (!passwordPattern.test(password)) {
//             newErrors.password = "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
//         }
//         setErrors(newErrors);
//         // If there are no errors, return true
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             console.log(email, password);
//             setMessage("Successful Login!!!");
//         }
        
//     };

//     return (
//         <div className="form">
//             <form onSubmit={handleSubmit} className='login'>
//                 <h1>Login</h1>
               
//                 <div className='input'>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         name='email'
//                         id='email' placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
//                 </div>
//                 <div className="input">
//                     <label>Password</label>
//                     <div className="password-input-container">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Password"
//                             onChange={(e) => setPassword(e.target.value)} />
//                         <button
//                             className="toggle-password"
//                             type="button"
//                             onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </button>
//                     </div>
//                     <div className="forps"><p><Link to="/Forgotpw">Forget Password? </Link></p></div>
//                     {errors.password && <p className="error">{errors.password}</p>}
//                 </div>
//                 <div className='but'>
//                     <Button variant="contained" type='submit'>Submit</Button>
//                     {message && <p style={{ color: 'green' }}>{message}</p>}
//                 </div>
//                 <div className="signup-link">
//                     <p>Don't have an account? <Link to="/SignUp">Sign up</Link></p>
//                 </div>
//             </form>
//         </div>
//     );
// }
// export default Loginform;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Loginform = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) newErrors.email = "Invalid email format";

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}/;
        if (!passwordPattern.test(password)) {
            newErrors.password = "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(email, password);
            setMessage("Successful Login!!!");
            navigate("/Dashboard"); // Redirect to dashboard
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className='login'>
                <h1>Login</h1>
                <div className='input'>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email'
                        id='email' placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input">
                    <label>Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="toggle-password"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </button>
                    </div>
                    <div className="forps"><p><Link to="/Forgotpw">Forget Password? </Link></p></div>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className='but'>
                    <Button variant="contained" type='submit'>Submit</Button>
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                </div>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/SignUp">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
}
export default Loginform;
