import React, { useState } from "react";
import "./Carousel.css";
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel  ">
      <div
        className="inner "
        style={{ transform: `translate(${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            key: index,
            width: "100%",
          });
        })}
      </div>
      <div className="indicators">
        <p
          className="control-arrow control-prev text-white"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          PREV
        </p>
        {React.Children.map(children, (child, index) => {
          return (
            <p
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </p>
          );
        })}
        <p
          className="control-arrow control-next text-white"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          NEXT
        </p>
      </div>
    </div>
  );
};

export default Carousel;
