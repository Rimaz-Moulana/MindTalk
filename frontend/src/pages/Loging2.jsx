import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()

        let email = e.target.elements.email?.value
        let password = e.target.elements.password?.value

        console.log(email, password)
    }
    return (
        <div className="h-screen flex bg-blue-50">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">Great to see you again! </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex">
                            <input
                                type="checkbox"
                                name="remember-me"
                                id="remember-me"
                                className="border border-gray-400 hover:cursor-pointer"
                            />
                            <p className="text-gray-400 ml-2">Remember Me</p>
                        </div>
                        <p className="text-blue-700 hover:cursor-pointer">Forget Password?</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-3">
                        <button
                            className={`bg-blue-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                        <p className="text-sm mt-3">
                            Don't have an account? <a className="text-blue-500 hover:cursor-pointer">Register</a>
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-5 text-sm text-gray-500">
                        <p>Or Continue with</p>
                        <button className="mt-2 text-blue-600">
                            <FaGoogle />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
