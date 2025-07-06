import { baseApi } from "../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (srcText) => {
        return {
          url: `/user/users?role=CUSTOMER&searchTerm=${srcText}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetUsersQuery } = usersApi;
