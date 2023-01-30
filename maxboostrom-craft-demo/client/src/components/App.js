import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import ParksShow from "./ParksShow";
import "../assets/scss/main.scss"


const App = (props) => {

  return (
    <ParksShow />
  );
};

export default hot(App);
