import { baseApi } from "../api/baseApi";

const orderListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetOrderListQuery } = orderListApi;
