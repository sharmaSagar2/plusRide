import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [captainEmail, setCaptainEmail] = useState('');
    const [captainPassword, setCaptainPassword] = useState('');
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('sagar');
        setCaptainData({
            email: captainEmail,
            password: captainPassword
        });
        console.log(captainData);
        
        setCaptainEmail('');
        setCaptainPassword('');
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-16 mb-8 rounded-md"
                    src="/src/images/driverLogo.jpg" alt="Logo" />
                <form onSubmit={submitHandler}>
                    <h3 className="text-xl mb-2">What is your email</h3>
                    <input
                        required 
                        value={captainEmail}
                        onChange={(e) => setCaptainEmail(e.target.value)}
                        className="bg-gray-200 mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="Email"
                    />
                    <h3 className="text-xl mb-2">What is your password</h3>
                    <input 
                        required
                        value={captainPassword}
                        onChange={(e) => setCaptainPassword(e.target.value)}
                        className="bg-gray-200 mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="Password" 
                    />
                    <button
                        className="bg-black text-white font-semibold mb-7 rounded-md px-4 py-2 w-full text-lg placeholder:text-base"
                    >Login</button>
                </form>
                <p className="text-center mb-3">Join fleet <Link to="/captain-signup" className="text-blue-700">Register as a Captain</Link> </p> 
            </div>
            <div>
                <Link to="/login" className="bg-orange-500 flex items-center justify-center text-white font-semibold mb-4 rounded-md px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
            </div>
        </div>
    );
}

export default CaptainLogin;