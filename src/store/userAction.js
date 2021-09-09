import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
};

export const userAction = createSlice({
  name: 'userAction',
  initialState,
  reducers: {
    toggle: (state, typeAction) => {
      state.value = typeAction.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = userAction.actions;

export default userAction.reducer;
