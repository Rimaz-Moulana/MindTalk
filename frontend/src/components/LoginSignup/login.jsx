import React, { useState } from 'react'
import { FaGoogle, FaFacebook, FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import './login.css'
import logg from '../../assets/Login/logg.svg'
import signinsvg from '../../assets/Login/2.svg'

const SignInSignUpForm = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false)

    const handleSwitchMode = () => {
        setIsSignUpMode((prevMode) => !prevMode)
    }

    return (
        <div
            className={`relative overflow-hidden w-full h-screen bg-blue-50 login-container ${
                isSignUpMode ? 'sign-up-mode' : ''
            }`}
        >
            <div className="forms-container absolute w-full h-full top-0 left-0 ">
                <div className="signin-signup absolute grid ">
                    <form
                        action=""
                        className={`sign-in-form flex flex-col justify-center align-middle align-center py-0 px-20 overflow-hidden  ${
                            isSignUpMode ? 'hidden' : ''
                        }`}
                    >
                        <h2 className="title text-blue-900 text-4xl mb-4">Sign in</h2>
                        <div className="input-feild max-w-xs w-full h-12 bg-white my-1 mx-0 rounded-xl grid p-2 text-gray-400 mb-4 items-center pl-4">
                            <FaUser />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Username"
                                className="leading-none font-medium text-blue-900 bg-transparent outline-none"
                            />
                        </div>
                        <div className="input-feild max-w-xs w-full h-12 bg-white my-1 mx-0 rounded-xl grid p-2 text-gray-400 mb-4 items-center pl-4">
                            <FaLock />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Password"
                                className="leading-none font-medium text-blue-900 bg-transparent outline-none"
                            />
                        </div>
                        <input
                            type="button"
                            value="Login"
                            className="border-none outline-none rounded-2xl cursor-pointer bg-blue-500 hover:bg-blue-600 text-white uppercase font-semibold my-4 mx-0 btn solid"
                        />

                        <p className="text-base py-3 px-0 social-text">Or Sign in with</p>
                        <div className="flex justify-center social-media">
                            <a
                                href="#"
                                className="h-12 w-12 my-0 mx-2 border border-blue-800 text-blue-800 flex justify-center rounded-full social-icon"
                            >
                                <FaGoogle />
                            </a>
                        </div>
                    </form>

                    <form
                        action=""
                        className={`flex flex-col justify-center align-middle align-center py-0 px-20 overflow-hidden sign-up-form ${
                            isSignUpMode ? '' : 'hidden'
                        }`}
                    >
                        <h2 className="text-blue-900 text-4xl mb-4 title">Sign up</h2>
                        <div className="input-feild max-w-xs w-full h-12 bg-white my-1 mx-0 rounded-xl grid p-2 text-gray-400 mb-4 items-center pl-4">
                            <FaUser className="text-gray-400" />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Username"
                                className="leading-none font-medium text-blue-900 bg-transparent outline-none"
                            />
                        </div>
                        <div className="input-feild max-w-xs w-full h-12 bg-white my-1 mx-0 rounded-xl grid p-2 text-gray-400 mb-4 items-center pl-4">
                            <FaEnvelope />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Email"
                                className="leading-none font-medium text-blue-900 bg-transparent outline-none"
                            />
                        </div>
                        <div className="input-feild max-w-xs w-full h-12 bg-white my-1 mx-0 rounded-xl grid p-2 text-gray-400 items-center pl-4">
                            <FaLock />
                            <input
                                type="password"
                                name=""
                                id=""
                                placeholder="Password"
                                className="leading-none font-medium text-blue-900 bg-transparent outline-none"
                            />
                        </div>
                        <input
                            type="button"
                            value="Sign up"
                            className="border-none outline-none rounded-2xl cursor-pointer bg-blue-500 hover:bg-blue-600 text-white uppercase font-semibold my-4 mx-0 btn solid"
                        />

                        <p className="text-base py-3 px-0 social-text">Or Sign up with</p>
                        <div className="flex justify-center social-media">
                            <a
                                href="#"
                                className="h-12 w-12 my-0 mx-2 border border-blue-800 text-blue-800 flex justify-center rounded-full social-icon"
                            >
                                <FaGoogle />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="absolute w-full h-full top-0 left-0 grid grid-cols-2 login-panels-container">
                <div className="flex flex-col text-center justify-around items-end panel left-panel">
                    <div className=" content flex flex-col justify-center items-center pt-8 text-white ">
                        <h3 className="font-semibold text-white text-3xl">New Here ?</h3>
                        <p className="text-white text-sm py-3 px-0">
                            Welcome aboard! Together, we can foster a healthier mindset. Sign up for a warm experience.
                        </p>
                        <button
                            className="border-2 border-white font-semibold w-32 h-10 m-0 bg-transparent text-sm text-white btn transparent rounded-2xl cursor-pointer"
                            id="sign-up-btn"
                            onClick={handleSwitchMode}
                        >
                            Sign up
                        </button>
                    </div>

                    <img src={logg} alt="" className="image" />
                </div>

                <div className="flex flex-col text-center justify-around items-end panel right-panel">
                    <div className="content flex flex-col justify-center items-center">
                        <h3 className="font-semibold text-white text-3xl">One of us ?</h3>
                        <p className="text-white text-sm py-3 px-0">
                            Great to see you again! Sign in and let's continue this journey together
                        </p>
                        <button
                            className="border-2 border-white font-semibold w-32 h-10 m-0 bg-transparent text-sm text-white btn transparent rounded-2xl cursor-pointer"
                            id="sign-in-btn"
                            onClick={handleSwitchMode}
                        >
                            Sign in
                        </button>
                    </div>

                    <img src={signinsvg} alt="" className="image"></img>
                </div>
            </div>
        </div>
    )
}

export default SignInSignUpForm
