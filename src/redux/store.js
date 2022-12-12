import { configureStore } from "@reduxjs/toolkit";
import { guestApi } from "./Guests/Guests";
import { serviceApi } from "./Services/Services";
import { appointmentApi } from "./Appointments/Appointment";
import { staffApi } from "./Staffs/Staffs";

export const store = configureStore({
  reducer: {
    [guestApi.reducerPath]: guestApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [staffApi.reducerPath]: staffApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    guestApi.middleware,
    serviceApi.middleware,
    appointmentApi.middleware,
    staffApi.middleware,
  ],
});
