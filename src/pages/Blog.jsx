import React from "react";
import Header from "../components/Header";
import { useGetBlogQuery } from "../redux/Api/admin/AdminBlog";
import { constant } from "../components/common/constant";
import { useNavigate } from "react-router";

function BlogUser() {
  const navigate = useNavigate();
  const { data } = useGetBlogQuery();

  return (
    <>
      <Header title="Blog" />
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            {data?.data?.map((item, index) => (
              <div key={index} className="col-md-6  mb-4">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src={`${constant.IMAGEURL}/${item?.image}`}
                      alt="randomimage"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-12 d-flex align-items-center">
                    <h6 className="mt-1 text-uppercase">{item.title}</h6>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="stock mt-1"
                      dangerouslySetInnerHTML={{
                        __html: item.description.substring(0, 1000),
                      }}
                    ></div>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`/blogdetail/${item._id}`, {
                        state: item,
                      });
                    }}
                    className="border-0 ratingbackground w-25 text-center text-white rounded py-2 mx-2 mt-1"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogUser;
