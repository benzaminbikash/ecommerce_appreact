import React, { useEffect } from "react";
import Header from "../components/Header";
import { useGetBlogQuery } from "../redux/Api/admin/AdminBlog";
import { constant, itemperPageforUser } from "../components/common/constant";
import { useNavigate, useSearchParams } from "react-router-dom";

function BlogUser() {
  const navigate = useNavigate();
  const { data, refetch } = useGetBlogQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const filterData = data?.data;
  const itemsPerPage = itemperPageforUser;
  const totalPages = Math.ceil(filterData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBlog = filterData?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setSearchParams({ page: prevPage });
    }
  };
  useEffect(() => {
    refetch();
  }, [data]);

  return (
    <main>
      <Header title="Blog" />
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            {displayedBlog?.map((item, index) => (
              <div key={index} className="col-md-6  mb-4">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src={`${constant.IMAGEURL}/${item?.image}`}
                      alt="randomimage"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-12 mt-1 justify-content-between d-flex align-items-center">
                    <h6 className=" stock text-uppercase">{item?.title}</h6>
                    <p className="stock text-warning fw-bold">
                      {item.createdAt.split("T")[0]}
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="stock mt-1"
                      dangerouslySetInnerHTML={{
                        __html: item?.description.substring(0, 1000),
                      }}
                    ></div>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`/blogdetail/${item?._id}`, {
                        state: item,
                      });
                    }}
                    className="border-0 ratingbackground blogbutton text-center text-white rounded py-2 mx-2 mt-1 stock"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-3 gap-2">
            {currentPage != 1 && (
              <button
                className="btn btn-outline-primary"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            <span className="align-self-center">
              {currentPage} / {totalPages}
            </span>
            {currentPage != totalPages && (
              <button
                className="btn btn-outline-primary"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogUser;
