import React from "react";
import { useEffect } from "react";
import {FaTimes} from "react-icons/fa"

const Response = ({ responseData, setResponseData }) => {
  useEffect(
    () => {
      let timeout = setTimeout(
        () => {
          setResponseData({...responseData, showResponse:false})
        }, 2000
      )
      return ()=>clearTimeout(timeout)
    },[responseData]
  )
    return (
      <section
        className={`responses 
        ${responseData.responseUpdated ?  "response-updated" :"response-error"}
        ${responseData.showResponse && "response-active"}`}
        id="responses-div"
      >
        <div>
          <div className="responses-div" id="placed-responce">
                    {responseData.msg}
          </div>
          <div
            className="responses-cancel"
            onClick={() => setResponseData({...responseData, showResponse:false})}
          >
            <FaTimes />
          </div>
        </div>
      </section>
    );
}

export default Response;