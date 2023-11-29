import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  suggestions: [],
};

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    setData: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload || {};
    },
    setSuggestions: (state: any, action: PayloadAction<any>) => {
      if (!state.suggestions?.includes(action?.payload)) {
        if (state.suggestions.length === 5) {
          const poppedArray = state.suggestions.pop();
          state.suggestions = [action.payload, ...poppedArray];
        } else if (!state.suggestions.length) {
          state.suggestions = [action.payload];
        } else {
          const newArray = state.suggestions;
          newArray.unshift(action.payload);
          state.suggestions = newArray;
        }
      } else return state;
    },
  },
});

export const { setData, setSuggestions } = weatherSlice.actions;
export default weatherSlice.reducer;
