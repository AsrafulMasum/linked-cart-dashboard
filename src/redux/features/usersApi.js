import { baseApi } from "../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
