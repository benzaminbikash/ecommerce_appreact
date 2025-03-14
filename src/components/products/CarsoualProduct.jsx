import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { constant } from "../common/constant";

function CarsoualProduct({ state }) {
  return (
    <>
      {state?.images && (
        <Carousel
          partialVisible={false}
          autoPlay={true}
          arrows={false}
          autoPlaySpeed={1500}
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={120}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 700,
                min: 0,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {state?.images?.map((item) => (
            <img
              src={`${constant?.IMAGEURL}/${item}`}
              className="img-fluid  rounded productdtailimage"
              alt="mainProduct"
            />
          ))}
        </Carousel>
      )}
    </>
  );
}

export default CarsoualProduct;
