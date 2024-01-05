import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancyDetails: {},
         
};

const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {
    setVacancyDetails: (state, actions) => {
    state.vacancyDetails = actions.payload
    }
        
  }
});

export const { setVacancyDetails} = vacancySlice.actions;
export default vacancySlice.reducer;