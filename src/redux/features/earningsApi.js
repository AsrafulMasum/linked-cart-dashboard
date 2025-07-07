import { baseApi } from "../api/baseApi";

const earningsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEarnings: builder.query({
      query: () => {
        return {
          url: "/order/admin-orders?status=Delivered",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetEarningsQuery } = earningsApi;
