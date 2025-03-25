import { apiSlice } from "../../Slice/apiSlice";

export const AdminCoupon = apiSlice.injectEndpoints({
  tagTypes: ["Coupon"],
  endpoints: (builder) => ({
    getCoupon: builder.query({
      query: () => ({
        url: "/coupon",
        method: "GET",
      }),
    }),
    addCoupon: builder.mutation({
      query: (data) => ({
        url: "/coupon",
        method: "POST",
        body: data,
      }),
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/coupon/${id}`,
        method: "DELETE",
      }),
    }),
    updateCoupon: builder.mutation({
      query: (coupon) => ({
        url: `/coupon/${coupon.id}`,
        method: "PUT",
        body: coupon.data,
      }),
    }),
  }),
});

export const {
  useUpdateCouponMutation,
  useGetCouponQuery,
  useDeleteCouponMutation,
  useAddCouponMutation,
} = AdminCoupon;
