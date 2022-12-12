import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://test-milano.onrender.com/";

export const staffApi = createApi({
  reducerPath: "staffApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Staff"],
  endpoints: (builder) => ({
    getStaffs: builder.query({
      query: () => `api/staffs/`,
      providesTags: ["Staff"],
    }),
    addStaff: builder.mutation({
      query: (value) => ({
        url: "api/staffs/",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Staff"],
    }),
  }),
});

export const { useAddStaffMutation, useGetStaffsQuery } = staffApi;
