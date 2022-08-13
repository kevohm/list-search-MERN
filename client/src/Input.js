import React from "react";

const data = ["genus","name","family","order"]
const Input = ({ setUpdateData, updateData }) => {
           return ( data.map((item) => {
                return  <div key={data.indexOf(item)}>
                        <label>{`${item.toUpperCase()}:`}</label>
                        <input
                            id={item}
                            type="text"
                            value={updateData[item]}
                            onChange={(e) => {
                                const { value } = e.target;
                                setUpdateData({
                                    ...updateData,
                                    [item]: value,
                                });
                            }}
                            required
                        />
                    </div>
            })
           )
};
export default Input;