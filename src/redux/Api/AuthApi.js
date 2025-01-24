import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../components/common/constant";

export const AuthApi = createApi({
  reducerPath: "AuthAPi",
  baseQuery: fetchBaseQuery({ baseUrl: constant.APIURL }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    loginUser: builder.mutation({
      query: () => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginUserMutation } = AuthApi;
