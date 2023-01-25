import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

/* To build this carousell you need: 
-transform translatex
-overflow hidden for parent container
-parent container relative, slide absolute
-slide nth child left 100%
-slide transform translateX 

Method:
1. Slides are laid out in one long ass row. Use javascript code forEach slide, style.left
2. Slide container has overflow:hidden to show only 1 slide 
3. In app.js, when click btns, move the whole row of images left or right using the transform translateX property

Notes: I'm not sure why you gotta use slide.style.left to move the slides into the row initially, and then use slide.style.transform = translateX to move it. I tried replacing either one with the other and it makes the carousell not function properly. 

*/

//when btn is clicked, count is added/subtracted, then carousel function will move the whole row of images left/right, depending on the count
//Use style.transform translateX property

//In Javascript I can directly manipulate the DOM using document.querySelector
//But in React, cant do that. You got to somehow inject the logic while writing the JSX.
//I succeeded using inline styles to inject my logic

function App() {
  const [count, setCount] = useState(0);
  const previous = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const next = () => {
    if (count === images.length - 1) {
      return;
    }
    setCount(count + 1);
  };
  const images = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="h-72 w-96 relative border-8 border-blue-500 rounded-2xl overflow-hidden">
        {images.map((image, index) => {
          return (
            <img
              className={`absolute object-cover h-auto w-auto `}
              src={`/images/${image}.jpg`}
              style={{
                left: `${index * 100}%`,
                transform: `translateX(-${count * 100}%)`,
                transition: "0.5s",
              }}
            ></img>
          );
        })}
      </div>
      <div className="flex justify-center gap-x-4">
        <FaArrowAltCircleLeft
          size="3rem"
          className="cursor-pointer "
          onClick={previous}
        ></FaArrowAltCircleLeft>
        <FaArrowAltCircleRight
          size="3rem"
          className="cursor-pointer"
          onClick={next}
        ></FaArrowAltCircleRight>
      </div>
    </div>
  );
}

export default App;
