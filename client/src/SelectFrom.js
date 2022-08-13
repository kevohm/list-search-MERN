import React from "react";

const SelectFrom = ({selectData,setSelectData}) => {

    return (
      <>
        <select id="select-btn" onChange={(e)=>setSelectData(e.target.value)}>
          <option disabled selected>
            Sort By
          </option>
          <option>Id</option>
          <option>Order</option>
          <option>Name</option>
          <option>Genus</option>
          <option>Family</option>
        </select>
      </>
    );
}

export default SelectFrom;