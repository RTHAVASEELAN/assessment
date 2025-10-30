import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from '../Pages/Dashboard/dashboard.slice'

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});

export default store;
