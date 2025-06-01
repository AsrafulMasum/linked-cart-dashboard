import { baseApi } from "../api/baseApi";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => {
        return {
          url: "/notification/admin",
          method: "GET",
        };
      },
    }),

    readNotification: builder.mutation({
      query: () => {
        return {
          url: "/notification/admin",
          method: "PATCH",
        };
      },
    }),
  }),
});

export const { useGetNotificationsQuery, useReadNotificationMutation } =
  notificationApi;
