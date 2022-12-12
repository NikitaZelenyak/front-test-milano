import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://test-milano.onrender.com/";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `api/services/`,
      providesTags: ["Service"],
    }),
    addService: builder.mutation({
      query: (value) => ({
        url: "api/services/",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});

export const { useAddServiceMutation, useGetServicesQuery } = serviceApi;
