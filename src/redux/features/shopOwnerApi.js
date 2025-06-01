import { baseApi } from "../api/baseApi";

const shopOwnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShopOwner: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/faq/get",
        };
      },
    }),

    updateShopOwner: builder.mutation({
      query: ({ id, payload }) => ({
        method: "PUT",
        url: `/faq/update/${id}`,
        body: payload,
      }),
    }),
  }),
});

export const {} = shopOwnerApi;
