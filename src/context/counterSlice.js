import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counters: [
      {
        id: '1',
        countername: 'counter',
        value: 0,
      },
    ],
  },
  reducers: {
    addCounter: (state, action) => {
      state.counters.push(action.payload);
    },
    incrementValue: (state, action) => {
      const { id } = action.payload;
      const counterFind = state.counters.find((counter) => counter.id === id);
      if (counterFind) {
        counterFind.value += 1;
      }
    },
    decrementValue: (state, action) => {
      const { id } = action.payload;
      const counterFind = state.counters.find((counter) => counter.id === id);
      if (counterFind && counterFind.value > 0) {
        counterFind.value -= 1;
      }
    },
    incrementByValue: (state, action) => {
      console.log(action.payload);
      const { id, value } = action.payload;
      const counterFind = state.counters.find((counter) => counter.id === id);
      if (counterFind) {
        counterFind.value += value;
      }
    },
    resetValue: (state, action) => {
      const { id } = action.payload;
      const counterFind = state.counters.find((counter) => counter.id === id);
      if (counterFind) {
        counterFind.value = 0;
      }
    },
    changeCounterName: (state, action) => {
      const { id, name } = action.payload;
      const counterFind = state.counters.find((counter) => counter.id === id);
      if (counterFind) {
        counterFind.countername = name;
      }
    },
    deleteCounter: (state, action) => {
      const { id } = action.payload;
      state.counters = state.counters.filter((counter) => counter.id !== id);
    },
  },
});

export const {
  addCounter,
  incrementByValue,
  incrementValue,
  resetValue,
  decrementValue,
  changeCounterName,
  deleteCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
