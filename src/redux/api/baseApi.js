import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://206.189.231.81:5000/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token && token !== "undefined") {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const imageUrl = "http://206.189.231.81:5000";
