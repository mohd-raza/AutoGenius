import React from "react";
import Type from "../components/Type";
import Form from "../components/Form.jsx";

const Home = () => {
  return (
    <div>
      <Type />
      <div style={{ paddingLeft: "250px", paddingRight: "250px" }}>
        {" "}
        <Form />
      </div>
    </div>
  );
};

export default Home;
