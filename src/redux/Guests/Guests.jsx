import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://test-milano.onrender.com/";

export const guestApi = createApi({
  reducerPath: "guestApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Guest"],
  endpoints: (builder) => ({
    getGuests: builder.query({
      query: () => `api/guests/`,
      providesTags: ["Guest"],
    }),
    addGuest: builder.mutation({
      query: (value) => ({
        url: "api/guests/",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Guest"],
    }),
  }),
});

export const { useAddGuestMutation, useGetGuestsQuery } = guestApi;
