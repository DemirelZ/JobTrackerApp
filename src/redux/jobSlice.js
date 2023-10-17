import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainJobs: [],
  jobs: [],
  initialized: false,
  isError: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      state.mainJobs = action.payload;
      state.initialized = true;
      state.isError = false;
    },
    deleteJob:(state, action)=>{
      
      const filtered=state.jobs.filter((job)=> job.id !== action.payload )
      state.jobs=filtered
    },
    setError: (state) => {
      state.isError = true;
      state.initialized = true;
    },
    filterBySearch: (state, action) => {
      const query = action.payload.toLowerCase();
      const filter = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      state.jobs = filter;
    },
    filterByStatus: (state, action) => {
      const filter = state.mainJobs.filter(
        (job) => job.status === action.payload
      );
      state.jobs = filter;
    },
    filterByType: (state, action) => {
      const filter = state.mainJobs.filter(
        (job) => job.type === action.payload
      );
      state.jobs = filter;
    },
    sortJobs: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.jobs.sort((a, b) => a.company.localeCompare(b.company));
          break;
        case "z-a":
          state.jobs.sort((a, b) => b.company.localeCompare(a.company));
          break;
        case "En Yeni":
          state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "En Eski":
          state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;

        default:
          break;
      }
    },
    clearFilters: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});

export const {
  setJob,
  deleteJob,
  setError,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
  clearFilters,
} = jobSlice.actions;

export default jobSlice.reducer;
