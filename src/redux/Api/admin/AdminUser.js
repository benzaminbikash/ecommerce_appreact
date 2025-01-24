import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../components/common/constant";

export const AdminUser = createApi({
  reducerPath: "AdminUser",
  baseQuery: fetchBaseQuery({
    baseUrl: constant.APIURL,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/allusers",
        method: "GET",
        credentials: "include",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const { useAllUsersQuery, useDeleteUserMutation } = AdminUser;
