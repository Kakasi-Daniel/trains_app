import { configureStore, createSlice } from '@reduxjs/toolkit';
import Randomstring from 'randomstring';

const initialState = [];

const reservation = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addRemoveSeat(state, action) {
      let code = localStorage.getItem('code');
      if (!code) {
        code = Randomstring.generate();
        localStorage.setItem('code', code);
      }
      let notFoundInStore = true;
      const newState = [...state];

      for (let i = 0; i < newState.length; i++) {
        if (action.payload.id === newState[i].id) {
          notFoundInStore = false;
          newState.splice(i, 1);
          break;
        }
      }

      if (notFoundInStore) {
        newState.push(action.payload);
      }

      if (newState.length === 0) {
        localStorage.removeItem('seats');
      } else {
        localStorage.setItem('seats', JSON.stringify([...newState]));
      }
      return [...newState];
    },
    clearStore(state) {
      localStorage.removeItem('seats');
      return [];
    },
    populateStore(state, action) {
      return [...action.payload];
    },
  },
});

const actions = reservation.actions;

export const store = configureStore({ reducer: reservation.reducer });
export default actions;
