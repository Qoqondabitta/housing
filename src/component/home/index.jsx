import React from "react";
import { Button, InputGeneral } from "../generics";
// import Button from "../generics/Button";

const Properties = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <InputGeneral width="200px" placeholder="Type" />
      <Button type="lightmode">Login</Button>
    </div>
  );
};

export default Properties;
