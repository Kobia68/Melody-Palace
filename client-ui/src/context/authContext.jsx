import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const signin = async (user) => {
        const res = await axios.post("http://localhost:5000/auth/signin", user);
        setCurrentUser(res.data);
    }

    const signout = async (user) => {
        await axios.post("auth/signout", user);
        setCurrentUser(null)
    }

    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, signin, signout}}>{children}</AuthContext.Provider>
    )
}