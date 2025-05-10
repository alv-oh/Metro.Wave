import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SignIn = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");

    let navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            setLoading("Please Wait....");
            setError("");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

             
            const response = await axios.post("https://otanganyati.pythonanywhere.com/api/signin", data);

            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            } else {
                setLoading("");
                setError(response.data.message);
            }

            setUsername("");
            setPassword("");
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
    };

    return (
        <div className="mt-4 row justify-content-center">
            <Navbar />
            <h1 className="mt-3"><b><u>You've Come Back</u></b></h1><br /><br /><hr />
            <div className="row mt-4 col-md-8 card shadow">
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <h1><b><u>SIGN IN</u></b></h1>

                <form onSubmit={submit}>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="form-control"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    /> <br />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    /> <br />

                    <button className="btn btn-info">SIGN IN</button>
                </form> <br />
                <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>
            </div>
            <Footer/>
        </div>
    );
};

export default SignIn;
