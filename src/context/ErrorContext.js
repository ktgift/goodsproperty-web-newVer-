import { createContext, useState, useContext} from "react"

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
    const [error, setError] = useState(null)

    return (
        <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>
    )
}


function useError(){
    const context = useContext(ErrorContext);
    return context;
}

export default ErrorContextProvider;

export { useError }