import React from 'react'
import {useMyContext} from "./Context"

const Content = ({ data, setShowPopup}) => {
  const myVar = useMyContext();
    return (
                  data.map(
                      (item) => {
                          const {_id,name,genus,family,order} = item;
                          return (
                            
                            <div className="entry" key={_id} onClick={() => { myVar.setUpdateData(item); return setShowPopup(true); }}>
                                      <div id="_id">{_id}</div>
                                      <div id="genus">{genus}</div>
                                      <div id="name">{ name}</div>
                                      <div id="family">{family}</div>
                                      <div id="order">{order}</div>
                              </div>
                            
                          );
                 }
             )
    );
}
export default Content
