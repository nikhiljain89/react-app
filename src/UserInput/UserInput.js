import React, { Component } from "react";

const userInput = (props) => {
  const style = {
    border: '2px solid red',
  };
  const { changeUserName } = { ...props };

  return <input type="text" style={style} onChange={changeUserName} />;
};

export default userInput;
