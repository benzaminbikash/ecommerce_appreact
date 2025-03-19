import React, { useEffect } from "react";
import Header from "../../../Header";
import { useLocation } from "react-router-dom";
import { constant } from "../../../common/constant";
import Seo from "../../../common/Seo";

function BlogDetail() {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Seo
        title={state?.title}
        description={
          state?.description?.length > 1000
            ? state?.description?.substring(0, 1000) + "..."
            : state?.description
        }
      />
      <Header title={"Blog Detail"} />
      <div className="container-fluid">
        <div className="container py-5">
          <img
            src={`${constant.IMAGEURL}/${state?.image}`}
            alt="randomimage"
            className="blogimage"
          />
          <h5 className="my-2  text-uppercase ">{state?.title}</h5>
          <div
            className="stock "
            dangerouslySetInnerHTML={{ __html: state?.description }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
