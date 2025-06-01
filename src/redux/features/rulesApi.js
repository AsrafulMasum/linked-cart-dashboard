import { baseApi } from "../api/baseApi";

const rulesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/rule/about",
        };
      },
    }),

    updateAboutUs: builder.mutation({
      query: (payload) => {
        return {
          method: "PATCH",
          url: "/rule/about",
          body: payload,
        };
      },
    }),

    getPrivacyPolicy: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/rule/privacy-policy",
        };
      },
    }),

    updatePrivacyPolicy: builder.mutation({
      query: (payload) => {
        return {
          method: "PATCH",
          url: "/rule/privacy-policy",
          body: payload,
        };
      },
    }),

    getTermsCondition: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/rule/terms-and-conditions",
        };
      },
    }),

    updateTermsCondition: builder.mutation({
      query: (payload) => {
        return {
          method: "PATCH",
          url: "/rule/terms-and-conditions",
          body: payload,
        };
      },
    }),

    getCookiePolicy: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/rule/terms-and-conditions",
        };
      },
    }),

    updateCookiePolicy: builder.mutation({
      query: (payload) => {
        return {
          method: "PATCH",
          url: "/rule/terms-and-conditions",
          body: payload,
        };
      },
    }),

    getRefundPolicy: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/rule/terms-and-conditions",
        };
      },
    }),

    updateRefundPolicy: builder.mutation({
      query: (payload) => {
        return {
          method: "PATCH",
          url: "/rule/terms-and-conditions",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
  useGetTermsConditionQuery,
  useUpdateTermsConditionMutation,
  useGetCookiePolicyQuery,
  useUpdateCookiePolicyMutation,
  useGetRefundPolicyQuery,
  useUpdateRefundPolicyMutation,
} = rulesApi;
