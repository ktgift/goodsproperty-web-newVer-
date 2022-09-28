import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import { useError } from "./ErrorContext";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [province, setProvince] = useState(null);
  const [amphure, setAmphure] = useState(null);
  const [tambon, setTambon] = useState(null);
  
  const { setError } = useError();

  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const resProvince = await axios.get("/searchDatas/province");
        setProvince(resProvince.data.allProvince);
        // console.log(resProvince);
      } catch (err) {
        console.log(err);
        setError(err.response.data.message)
      }
    };

    fetchProvince();
  }, []);
  // console.log(province)

  useEffect(() => {
    const fetchAmphure = async () => {
      try {
        const resAmphure = await axios.get("searchDatas/amphure");
        setAmphure(resAmphure.data.allAmphure)
      } catch(err) {
        setError(err.response.data.message)
      }
    }

    fetchAmphure();
  }, [])
  

  useEffect(() => {
    const fetchTambon = async () => {
      try{
        const resTambon = await axios.get('searchDatas/tambon');
        setTambon(resTambon.data.allTambon)
      } catch(err) {
        setError(err.response.data.message)
      }
    }

    fetchTambon();
  }, [])
// console.log(tambon)

  return (
    <SearchContext.Provider value={{ province, amphure, tambon }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { useSearch };
