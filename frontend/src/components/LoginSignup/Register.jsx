import { useRef, useState, useEffect } from "react";
import { FaCheck, FaInfoCircle, FaTimes } from 'react-icons/fa'
import axios from 'axios';




const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, seSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidName(result);
    }, [username])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(username);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPwd(result);
        const match = password == matchPwd;
        setValidMatch(match);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form submitted!");  // Add this line

        const v1 = true;
        const v2 = true;

        console.log("v1:", v1);
        console.log("v2:", v2);

        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }


        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', 
            JSON.stringify({ user: username, email, password: password }), 
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
        

            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {success ? (
                <section>
                    <h1 className="text-2xl font-bold mb-2">Success!</h1>
                    <p className="text-blue-600">
                        <a href="#" className="hover:underline">Sign In</a>
                    </p>
                </section>
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <section className="bg-white rounded-lg p-8 shadow-md w-96">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1 className="text-xl font-bold mb-4 text-center text-blue-700">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <label className="flex items-center">
                                Username:
                                <FaCheck className={`ml-1 ${validName ? "text-blue-700" : "hidden"}`} />
                                <FaTimes className={`ml-1 ${validName || !username ? "hidden" : "text-grey-400"}`} />
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={username}
                                required
                                className={`border p-2 rounded ${validName ? "border-blue-700" : "border-grey-400"} w-72`}
                            />
                            {/* <p id="uidnote" className={`instructions ${userFocus && user && !validName ? "" : "offscreen"}`}>
                            <FaInfoCircle className="mr-1" />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p> */}

                            <label className="flex items-center">
                                Email:
                                <FaCheck className={`ml-1 ${validEmail ? "text-blue-700" : "hidden"}`} />
                                <FaTimes className={`ml-1 ${validEmail || !email ? "hidden" : "text-grey-400"}`} />
                            </label>
                            <input
                                type="text"
                                id="email"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                className={`border p-2 rounded ${validEmail ? "border-blue-700" : "border-grey-400"} w-72`}
                            />

                            <label className="flex items-center">
                                Password:
                                <FaCheck className={`ml-1 ${validPwd ? "text-blue-700" : "hidden"}`} />
                                <FaTimes className={`ml-1 ${validPwd || !password ? "hidden" : "text-grey-400"}`} />
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={password}
                                required
                                className={`border p-2 rounded ${validPwd ? "border-blue-700" : "border-grey-400"} w-72`}
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            {/* <p id="pwdnote" className={`instructions ${pwdFocus && pwd && !validPwd ? "" : "offscreen"}`}>
                            <FaInfoCircle />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}

                            <label className="flex items-center">
                                Confirm Password:
                                <FaCheck className={`ml-1 ${validMatch && matchPwd ? "text-blue-700" : "hidden"}`} />
                                <FaTimes className={`ml-1 ${validMatch && matchPwd || !matchPwd ? "hidden" : "text-grey-400"}`} />
                            </label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                className={`border p-2 rounded ${validMatch ? "border-blue-700" : "border-grey-400"} w-72`}
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />

                            {/* <p id="confirmnote" className={`instructions ${matchFocus && matchPwd && !validMatch ? "" : "offscreen"}`}>
                            <FaInfoCircle />
                            Must match the first password input field.
                        </p> */}

                            <br />
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className={`bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4 ${!(validName && validEmail && validPwd && validMatch) ? "opacity-50 cursor-not-allowed" : ""}`}
                                    disabled={!(validName && validEmail && validPwd && validMatch)}
                                >
                                    Sign Up
                                </button>
                            </div>


                        </form>
                        <p className="text-center">
                            <br />
                            Already registered?<br />
                            <span className="line">
                                <a href="#" className="text-blue-700 hover:underline text-center">Sign In</a>
                            </span>
                        </p>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Register;






