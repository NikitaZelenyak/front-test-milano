import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://test-milano.onrender.com/";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Appointment"],
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: ({ day, month, year }) =>
        `api/appointments?day=${day}&month=${month}&year=${year}`,
      providesTags: ["Appointment"],
    }),
    getAppointmentsById: builder.query({
      query: (id) => `api/appointments/${id}`,
      providesTags: ["Appointment"],
    }),
    addAppointment: builder.mutation({
      query: (value) => ({
        url: "api/appointments/",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Appointment"],
    }),
    removeAppointment: builder.mutation({
      query: (id) => ({
        url: `api/appointments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Appointment"],
    }),
    updateAppointment: builder.mutation({
      query: (data) => ({
        url: `api/appointments/${data.id}`,
        method: "PUT",
        body: { data },
      }),
      invalidatesTags: ["Appointment"],
    }),
    updateStatusAppointment: builder.mutation({
      query: ({ id, confirm }) => ({
        url: `api/appointments/${id}/confirm`,
        method: "PATCH",
        body: { confirm },
      }),
      invalidatesTags: ["Appointment"],
    }),
  }),
});

export const {
  useAddAppointmentMutation,
  useGetAppointmentsByIdQuery,
  useGetAppointmentsQuery,
  useRemoveAppointmentMutation,
  useUpdateAppointmentMutation,
  useUpdateStatusAppointmentMutation,
} = appointmentApi;
