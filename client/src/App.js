import React from "react";
import Body from "./Body";
const App = () => {
  const url = process.env.BASE_URL;
  console.log(url);
  return (
    <>
      <Body />
    </>
  );
};

export default App;
