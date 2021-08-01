import React from "react";

function Page(props) {
  const data = props.data;
  const length = props.length;
  const setSlide = props.setSlide;
  const slide = props.slide;
  let isFirst = true;
  let isLast = slide === length - 1 ? true : false;
  if (slide !== 0) {
    isFirst = false;
  } else {
    isFirst = true;
  }

  return (
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
        Reset
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
  );
}
export default Page;
