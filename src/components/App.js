import React, { Component, useState } from "react";
import "../styles/App.css";
import Page from "./page";

const App = (props) => {
  const [slide, setSlide] = useState(0);
  const arr = props.slides;

  return (
    <>
      <Page
        data={arr[slide]}
        setSlide={setSlide}
        length={arr.length}
        slide={slide}
      />
    </>
  );
};

export default App;
