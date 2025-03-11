import { apiSlice } from "../../Slice/apiSlice";

export const AdminBlog = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
    }),
    updateBlog: builder.mutation({
      query: (blog) => ({
        url: `/blog/${blog.id}`,
        method: "PUT",
        body: blog.data,
      }),
    }),
  }),
});

export const {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useGetBlogQuery,
} = AdminBlog;
