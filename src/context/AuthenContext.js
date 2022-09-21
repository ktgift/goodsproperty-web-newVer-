import { createContext, useContext } from "react";


const AuthenContext = createContext();

function AuthenContextProvider({ children }) {
    const register = (input) => {
        console.log(input)
    }

    return (
        <AuthenContext.Provider value={{register}}>{children}</AuthenContext.Provider>
    )
}

export default AuthenContextProvider;

function useAuthen() {
    const context = useContext(AuthenContext);
    return context;
}

export { useAuthen }

