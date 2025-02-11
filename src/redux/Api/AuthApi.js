import { apiSlice } from "../Slice/apiSlice";

export const AuthApi = apiSlice.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    addCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/refresh",
        method: "POST",
        body: { refreshToken: localStorage.getItem("refreshToken") },
      }),
      //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //     try {
      //       const { data } = await queryFulfilled;
      //       dispatch(setCredentials(data));
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginUserMutation,
  useRefreshMutation,
  useUserInfoQuery,
  useAddCartMutation,
} = AuthApi;
