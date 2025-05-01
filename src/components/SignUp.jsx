import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const SignUp = () => {

    let [username, setUsername] = useState("")
    let[email, setEmail] = useState("")
    let[phone, setPhone] = useState("")
    let[password, setPassword] = useState("")
    let[error, setError] = useState("")
    let[success, setSuccess] = useState("")
    let[loading, setLoading] = useState("")

    let navigate = useNavigate();
    

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            
            setLoading("Hold On...")
            setSuccess("")
            setError("")

            const data = new FormData()    

            data.append("username", username)
            data.append("email", email)
            data.append("phone", phone)
            data.append("password", password)

            const response = await axios.post("https://otanganyati.pythonanywhere.com/api/signup", data)

            setLoading("")
            setSuccess(response.data.message)
            navigate("/")
            setUsername("")
            setEmail("")
            setPhone("")
            setPassword("")
        } catch (error) {

            setLoading("")
            setError(error.message)
        }
    }

    return ( 
        <div className=" m-4 row justify-content-center">
            <h1><b><u>Welcome</u></b></h1><br /><br /><hr />
        <div className="">
            <b className="text-warning">{loading}</b>
            <b className="text-success">{success}</b>
            <b className="text-danger">{error}</b>
        </div><br /><br />
        
        <div className="col-md-6 p-4 card shadow">
            <form className="form-ish" onSubmit={submitForm}>
                <input type="text" value={username} className="form-control" placeholder="Enter Your Username" required onChange={(e) =>setUsername(e.target.value) }/> <br />
                <input type="email" value={email} className="form-control" placeholder="Enter Your Email" required onChange={(e) => setEmail(e.target.value)}/> <br />
                <input type="tel" value={phone} className="form-control" placeholder="Enter Your PhoneNumber" required onChange={(e) => setPhone(e.target.value)}/> <br />
                <input type="password" value={password} className="form-control" placeholder="Enter Your Password" required onChange={(e) => setPassword(e.target.value)}/> <br />

                <button  className="btn btn-info"><b>Sign Up</b></button>
            </form> <br />
            <p>Already have an Account?<Link to="/signin">Sign In</Link></p>
        </div>         
        <Footer/>
        </div>
     );

}
export default SignUp;