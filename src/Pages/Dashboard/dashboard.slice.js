import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  selectedEmployee: 1,
  darkMode: false,
  search: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebarOpen = action.payload ?? !state.sidebarOpen;
    },
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload ?? !state.darkMode;
    },
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { toggleSidebar, toggleDarkMode, setSelectedEmployee, setSearch } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
