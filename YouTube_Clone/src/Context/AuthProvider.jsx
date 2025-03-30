import React, { useEffect, useState, createContext, useContext } from "react";
import { fetchData } from "../utils/Rapidapi";  // Make sure your fetchData utility works correctly

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`)
      .then((response) => {
        // Check if the response is valid and contains the 'contents' property
        if (response && response.contents) {
          // console.log(response.contents);
          setSearchResults(response.contents);
        } else {
          console.error("No contents found in response");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{ loading, searchResults, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
