import { apiSlice } from "../Slice/apiSlice";
import { setCredentials } from "../Slice/AuthSlice";

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
      query: () => ({
        url: "/login",
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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginUserMutation,
  useRefreshMutation,
} = AuthApi;
