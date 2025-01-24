import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminBanner = createApi({
  reducerPath: "AdminBanner",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: "/banner",
        method: "GET",
      }),
    }),
    addBanner: builder.mutation({
      query: (data) => ({
        url: "/banner",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/banner/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    updateBanner: builder.mutation({
      query: (banner) => ({
        url: `/banner/${banner.id}`,
        method: "PUT",
        body: banner.data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetBannerQuery,
  useAddBannerMutation,
  useDeleteBannerMutation,
  useUpdateBannerMutation,
} = AdminBanner;
