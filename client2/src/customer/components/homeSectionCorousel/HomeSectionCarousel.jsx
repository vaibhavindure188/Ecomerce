import React, { useState } from "react";
import HomeSectionCard from "./HomeSectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// import Data from "./Data";
function HomeSectionCarousel({Data, sectionName}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1000: { items: 5 },
  };
  const items = Data.slice(0,10).map((itemCurr) => (
    <HomeSectionCard item = {itemCurr} />
  ));

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    console.log(activeIndex)
  }
  const slidePre = () => {
    setActiveIndex(activeIndex - 1);
    console.log(activeIndex)
  }
  const syncActiveIndex = ({item}) => setActiveIndex(item);
  return (
    <div className="relative px-4 lg:px-8 border mx-5">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 px-5 mx-5">
        {/* <AliceCarousel
          
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}   // its functionality doesnt have change
          activeIndex={activeIndex}
          </> */}
          
        <AliceCarousel
          items={items}
          mouseTracking
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex} 
          activeIndex={activeIndex} // Pass activeIndex as prop
        />
          
          
        
        {activeIndex !== 0 && (
          <button variant="contained"
            style={{
              zIndex: "50",
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              backgroundColor: "grey",
              height: "3rem",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "green")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "grey")
            }
            onClick={slidePre}
          >
            <ChevronLeftIcon />
          </button>
        )}

        {activeIndex !== items.length - 5 && (
          <button
            style={{
              zIndex: "50",
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              backgroundColor: "grey",
              height: "3rem",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "green")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "grey")
            }
            onClick={slideNext}
          >
            <KeyboardArrowRightIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
