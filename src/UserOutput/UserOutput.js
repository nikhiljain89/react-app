import React, { Component } from "react";

const userOutput = (props) => {
  const { userName } = { ...props };
  return (
    <>
      <p>UserName :- {userName}</p>
      <p>UserName :- {userName}</p>
    </>
  );
};

export default userOutput;
