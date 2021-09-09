import { createSlice } from '@reduxjs/toolkit'

const favstore = JSON.parse(localStorage.getItem('favourites'));
let arrListFav = favstore ? favstore.value : [];

const favIdstore = JSON.parse(localStorage.getItem('listFavItems'));
let arrFav = favIdstore ? favIdstore : [];

const initialState = {
  value: arrListFav,
};

export const favSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    toggle: (state, item) => {
      var pl = item.payload;
      const idx = state.value.findIndex(x => x.id === pl.id);
      if (idx !== -1) {
        state.value.splice(idx, 1);
        arrFav = arrFav.filter(function (x) {
          return x !== pl.id;
        })
        localStorage.setItem('favourites', JSON.stringify(state));
        localStorage.setItem('listFavItems', JSON.stringify(arrFav));
      } else {
        state.value.push(pl);
        arrFav.push(pl.id);
        localStorage.setItem('favourites', JSON.stringify(state));
        localStorage.setItem('listFavItems', JSON.stringify(arrFav));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = favSlice.actions;

export default favSlice.reducer;
