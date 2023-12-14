import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  isLoggedIn: false,
};

const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {
    setApplyDetails: (state, actions) => {
     return {
        ...state,
        applyDetails: actions.payload,
        isLoggedIn: true
     }
    },
    handleLogout: (state) => {
   
    },
  }
});

export const { setApplyDetails, handleLogout } = applySlice.actions;
export default applySlice.reducer;