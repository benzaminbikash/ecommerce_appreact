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
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useContactMutation,
  useAllContactQuery,
  useDeleteContactMutation,
} = AuthApi;
