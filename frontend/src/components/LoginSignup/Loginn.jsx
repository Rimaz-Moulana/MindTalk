import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import AuthContext from "../../context/AuthProvider";


const Loginn = () => {
    const { setAuth } = useContext(AuthContext);
    const axiosPrivate = useAxiosPrivate();


    const navigate = useNavigate();
    const location = useLocation();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState(""); // New state to store the logged-in username

    const from = location.state?.from?.pathname || "/";



    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState("");
    const [password, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoginSuccess(false);// Reset the login success state

        try {
            const response = await axiosPrivate.post('http://localhost:8080/api/v1/auth/authenticate',
                JSON.stringify({ email: email, password: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            console.log("Response data:", response?.data);
            const accessToken = response?.data?.access_token;
            console.log("accessToken:", accessToken);

            const id = response?.data?.id;
            const roles = response?.data?.roles;
            const username = response?.data?.username;
            setLoggedInUsername(username);
            setLoginSuccess(true);
            console.log("email:", email);
            console.log("password:", password);
            console.log("roles:", roles);
            console.log("username:", username);
            console.log("accessToken:", accessToken);
            console.log("id:", id);
            

            setAuth({ email, password, roles, username, accessToken, id });
            localStorage.setItem("authData", JSON.stringify({ email, password, roles, username, accessToken, id }));

            setUser("");
            setPwd("");
            // Role-based navigation
            if (roles.includes('ROLE_ADMIN')) {
                navigate('/admin');
            } else if (roles.includes('ROLE_CLIENT')) {
                navigate('/client', { state: { loggedInUsername } });
            } else if (roles.includes('ROLE_MODERATOR')) {
                navigate('/moderator');
            } else if (roles.includes('ROLE_COUNSELLOR')) {
                navigate('/counsellor');
            }
        } catch (err) {
            console.error("Caught error:", err);

            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <section className="bg-white rounded-lg p-8 shadow-md w-96">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
                {/* Success message */}
                {loginSuccess && (
                    <p className="successmsg" aria-live="polite">
                        Login successful!
                    </p>
                )}
                <h1 className="text-xl font-bold mb-4 text-center text-blue-700">Sign In</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        Email:
                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={email}
                            required
                            className="border p-2 rounded w-full"
                        />
                    </label>
                    <label className="block">
                        Password:
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={password}
                            required
                            className="border p-2 rounded w-full"
                        />
                    </label>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    Need an Account?<br />
                    <span className="line">
                        <a href="/register" className="text-blue-700 hover:underline">
                            Sign Up
                        </a>
                    </span>
                </p>
            </section>
        </div>
    );
};

export default Loginn;
