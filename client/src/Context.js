import React, { useContext, useState} from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [selectData, setSelectData] = useState("id");
    const [error, setError] = useState(false);
    const [searchData, setSearchData] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(true); 
    return (
      <AppContext.Provider
        value={{
          updateData,
          setUpdateData,
          loading,
          setLoading,
          error,
          setError,
          selectData,
          setSelectData,
          searchData,
          setSearchData,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}
//custom hook

const useMyContext = () => {
    return useContext(AppContext)
}
//loading new data

export { useMyContext, AppProvider };