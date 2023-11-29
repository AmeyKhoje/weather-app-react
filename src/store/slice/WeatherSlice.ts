import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    setData: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload || {};
    },
  },
});

export const { setData } = weatherSlice.actions;
export default weatherSlice.reducer;
