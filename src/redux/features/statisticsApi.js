import { baseApi } from "../api/baseApi";

const statisticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBannerStats: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),

    getUserStats: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),

    getEarningStats: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),

    getRetentionStats: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),

    getRetailerStats: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetBannerStatsQuery,
  useGetUserStatsQuery,
  useGetEarningStatsQuery,
  useGetRetentionStatsQuery,
  useGetRetailerStatsQuery,
} = statisticsApi;
