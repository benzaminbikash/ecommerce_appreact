import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminProduct = createApi({
  reducerPath: "AdminProduct",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({}),
    }),
  }),
});

export {};
