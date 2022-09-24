import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { setToken, removeToken, getToken } from '../services/localStorage'
import { useNavigate } from "react-router-dom";


const AuthenContext = createContext();

function AuthenContextProvider({ children }) {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = getToken();
                if(token) {
                    const resUser = await axios.get('/users/userlogin');
                    setUser(resUser.data.user)
                    console.log(resUser.data.user)
                }
            } catch(err) {
                removeToken();
                navigate('/')
            }
        }

        fetchUser();
    }, [])


    const register = async (input) => {
        const res = await axios.post('/auth/register', input)
        setToken(res.data.token)
        
        const resUser = await axios.get('/users/userlogin');
        setUser(resUser.data.user)
       
    }

    const login = async (inputLogin) => {
        const res = await axios.post('/auth/login', inputLogin);
        setToken(res.data.token);

        const resUser = await axios.get('/users/userlogin');
        setUser(resUser.data.user)
    }

    //for logout
    const logout = () => {
        removeToken();
        setUser(null);
    }

    return (
        <AuthenContext.Provider value={{register, user, login, logout}}>{children}</AuthenContext.Provider>
    )
}

export default AuthenContextProvider;

function useAuthen() {
    const context = useContext(AuthenContext);
    return context;
}

export { useAuthen }

