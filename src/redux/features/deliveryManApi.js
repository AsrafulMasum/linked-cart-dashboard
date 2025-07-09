import { baseApi } from "../api/baseApi";

export const deliveryManApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDeliveryMan: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/user/shopper",
        };
      },
    }),

    createDeliveryMan: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/offer",
          body: payload,
        };
      },
    }),

    updateDeliveryMan: builder.mutation({
      query: (data) => {
        return {
          method: "PATCH",
          url: `/offer/${data.id}`,
          body: data?.body,
        };
      },
    }),

    deleteDeliveryMan: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/offer/${id}`,
        };
      },
    }),
  }),
});

export const { useGetDeliveryManQuery } = deliveryManApi;
