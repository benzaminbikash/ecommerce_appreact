import { apiSlice } from "../Slice/apiSlice";

export const AuthApi = apiSlice.injectEndpoints({
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
    allContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
    }),
  }),
});

export const { useContactMutation, useAllContactQuery } = AuthApi;
