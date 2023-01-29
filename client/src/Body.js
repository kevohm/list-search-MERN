import React, { useState,useEffect } from "react";
import {useMyContext} from "./Context"

import SelectFrom from "./SelectFrom";
import AllCategories from "./AllCategories";
import Content from "./Content";
import Popup from "./Popup"
import Response from "./Response"


const Body = () => {
  const myVar = useMyContext();
  
  const [data, setData] = useState([]);
  const [responseData, setResponseData] = useState({
    responseUpdated: false,
    msg: "",
    showResponse:false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [updateAll, setUpdateAll] = useState(false);
  const getData = async () => {
    let url = "https://list-search-mern-production.up.railway.app/v1/api";
    if (myVar.searchData === "") {
      url +=
        "/fruits/?sort=" +
        myVar.selectData.toLowerCase();
    } else {
      url +=
        "/fruits/?sort=" +
        myVar.selectData.toLowerCase() +
        "&name=" +
        myVar.searchData.toLowerCase();
    }
    let resp = await fetch(url);
    if (resp.status >= 200 && resp.status <= 299) {
      myVar.setLoading(false)
      myVar.setError(false)
      let result = await resp.json();
      setResponseData({
        showResponse: true,
        msg: result.msg,
        responseUpdated: result.success,
      });
      setData(result.data);
    } else {
      myVar.setLoading(false);
      myVar.setError(true);
      setResponseData({ ...responseData, showResponse: false });
    }
    
    };
    useEffect(() => {
      getData();
    }, [updateAll,myVar.searchData, myVar.selectData]);
  
  if (myVar.loading) {
    return <h4>
      loading...
    </h4>
  } else if (myVar.error) { 
    return (
      <div className="Error-div">
        <img
          src="..\assets\networkError.svg"
          alt="NetworkError"
          className="Error-image"
        />
        <h5>Error: try reloading or check internet connection</h5>
      </div>
    );
  }
  return (
    <>
      <Response responseData={responseData} setResponseData={setResponseData} />
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setResponseData={setResponseData}
        responseData={responseData}
        setUpdateAll={setUpdateAll}
        updateAll={updateAll}
      />
      <section className="body-main">
        <div className="main-header">
          <h2>Your Items</h2>
        </div>
        <div className="main-search">
          <form>
            <div>
              <input
                type="search"
                id="search"
                placeholder="Search by name..."
                onChange={(e) => {
                  e.preventDefault();
                  return myVar.setSearchData(e.target.value);
                }}
              />
            </div>
            <div>
              <SelectFrom
                selectData={myVar.selectData}
                setSelectData={myVar.setSelectData}
              />
            </div>
          </form> 
          <div className="body-header">
            <div className="header">
              <AllCategories />
            </div>
          </div>

          <div className="body-contents">
            {data.length === 0 ? (
              <div className="empty">No Element Found</div>
            ) : (
                <Content data={data} setShowPopup={ setShowPopup} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
