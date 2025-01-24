import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminSubAttibute = createApi({
  reducerPath: "AdminSubAttibute",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getSubAttribute: builder.query({
      query: () => ({
        url: "/subattribute",
        method: "GET",
      }),
    }),
    addSubAttribute: builder.mutation({
      query: (data) => ({
        url: "/subattribute",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    deleteSubAttribute: builder.mutation({
      query: (id) => ({
        url: `/subattribute/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    updateSubAttribute: builder.mutation({
      query: (item) => ({
        url: `/subattribute/${item.id}`,
        method: "PUT",
        body: item.data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useAddSubAttributeMutation,
  useGetSubAttributeQuery,
  useDeleteSubAttributeMutation,
  useUpdateSubAttributeMutation,
} = AdminSubAttibute;
