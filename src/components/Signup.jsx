import React, { useEffect, useState } from 'react'
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import AllRoutes from './AllRoutes';
import Navbar from './Navbar';


const Signup = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(data => {
                console.log(data)
                setValue(data.user.email)
                localStorage.setItem("email3", data.user.email)
                navigate("/")
            })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email3"))
    }, [])


    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>{
            value ? <>
            <button onClick={handleLogout}>Logout</button>
            <AllRoutes/>
            <Navbar/>
            </>
            : <button onClick={handleClick}> Signin with Google</button>
        } </div>
    )
}

export default Signup
