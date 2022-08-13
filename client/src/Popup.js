
import React from "react";
import Input from "./Input"
import { FaTimes } from 'react-icons/fa';
import { useMyContext } from "./Context";


const Popup = ({showPopup,setShowPopup,setResponseData, responseData, updateAll, setUpdateAll}) => {
  const myVar = useMyContext();
  const { _id } = myVar.updateData;
  const url = [
    {
      url: "/fruits/" + _id,
      options: {
        headers: { "Content-type": "application/json" },
        method: "PATCH",
        body: JSON.stringify(myVar.updateData),
      },
    },
    {
      url: "/fruits/" + _id,
      options: {
        method: "DELETE",
      },
    },
  ];
  const updateOrDeleteSingle = async (url,options) => {
    const resp = await fetch(
      url,options
    );
    setShowPopup(false);
    if (resp.status >= 200 && resp.status <= 299) {
      const result = await resp.json();
      setResponseData({
        showResponse: true,
        msg: result.msg,
        responseUpdated: result.success,
      });
    } else {
      setResponseData({
        ...responseData,
        showResponse: false,
      });
    }
    setTimeout(() => setUpdateAll(!updateAll), 1000)
  };
    return (
      <section className={`popup ${showPopup && "popup-active"}`}>
        <div className="popup-div">
          <div className="popup-cancel">
            <FaTimes id="popup-cancel" onClick={() => setShowPopup(false)} />
          </div>
          <div>
            <div className="edited-content">
              <form>
                <Input
                  setUpdateData={myVar.setUpdateData}
                  updateData={myVar.updateData}
                />
              </form>
            </div>
            <div className="editing-btn">
              <button
                className="edit"
                id="editBtn"
                onClick={(e) => { e.preventDefault(); updateOrDeleteSingle(url[0].url, url[0].options) }}
              >
                update
              </button>
              <button
                className="delete"
                id="deleteBtn"
                onClick={(e) => { e.preventDefault(); updateOrDeleteSingle(url[1].url, url[1].options) }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Popup; 