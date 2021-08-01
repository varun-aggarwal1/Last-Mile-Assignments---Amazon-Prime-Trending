import React, { Component, useState } from "react";
import "../styles/App.css";
// import Page from "./page";

const App = (props) => {
  const [slide, setSlide] = useState(0);
  const arr = props.slides;
  const length = arr.length;
  const data = arr[slide];
  let isFirst = true;
  let isLast = slide === length - 1 ? true : false;
  if (slide !== 0) {
    isFirst = false;
  } else {
    isFirst = true;
  }

  return (
    <>
      <div>
        <div>
          <h1 data-testid="title">{data.title}</h1>
          <p data-testid="text">{data.text}</p>
        </div>
        <button
          data-testid="button-restart"
          disabled={isFirst}
          onClick={() => {
            setSlide(0);
          }}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          disabled={isFirst}
          onClick={() => {
            if (slide !== 0) setSlide(slide - 1);
          }}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          disabled={isLast}
          onClick={() => {
            if (slide !== length - 1) setSlide(slide + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
