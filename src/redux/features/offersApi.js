import { baseApi } from "../api/baseApi";

const offersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOffers: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/offer",
        };
      },
    }),

    createOffer: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          method: "POST",
          url: "/package",
          body: data,
        };
      },
    }),

    updateOffer: builder.mutation({
      query: (data) => {
        return {
          method: "PUT",
          url: `/package/${data.id}`,
          body: data?.body,
        };
      },
    }),

    deleteOffer: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/package/${id}`,
        };
      },
    }),
  }),
});

export const {
  useGetOffersQuery,
  useCreateOfferMutation,
  useUpdateOfferMutation,
  useDeleteOfferMutation,
} = offersApi;
