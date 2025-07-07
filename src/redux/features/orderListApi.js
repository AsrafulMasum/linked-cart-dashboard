import { baseApi } from "../api/baseApi";

const orderListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.query({
      query: (status) => {
        return {
          url: `/order/admin-orders?status=${status}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetOrderListQuery } = orderListApi;
