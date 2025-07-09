import { baseApi } from "../api/baseApi";

const shopOwnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShopOwner: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/user/shop",
        };
      },
    }),

    updateShopOwner: builder.mutation({
      query: ({ id, payload }) => {
        return {
          method: "PATCH",
          url: `/user/change-status/${id}`,
          body: payload,
        };
      },
    }),
  }),
});

export const { useGetShopOwnerQuery, useUpdateShopOwnerMutation } =
  shopOwnerApi;
