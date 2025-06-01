import { baseApi } from "../api/baseApi";

const shopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShop: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),

    addShop: builder.mutation({
      query: (payload) => {
        return {
          url: "/",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useGetShopQuery, useAddShopMutation } = shopApi;
