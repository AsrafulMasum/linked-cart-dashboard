import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/user/profile",
        };
      },
    }),

    otpVerify: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/auth/verify-email",
          body: payload,
        };
      },
    }),

    login: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/auth/login",
          body: payload,
        };
      },
    }),

    forgotPassword: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/auth/forgot-password",
          body: payload,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: ({ payload, token }) => {
        console.log(payload);
        return {
          method: "POST",
          url: "/auth/reset-password",
          body: payload,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    changePassword: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/auth/change-password",
          body: payload,
        };
      },
    }),

    updateProfile: builder.mutation({
      query: (payload) => {
        return {
          method: "PATCH",
          url: "/user",
          body: payload,
        };
      },
    }),

    resendOTP: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/user/resend-otp",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useOtpVerifyMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useProfileQuery,
  useResendOTPMutation,
} = authApi;
