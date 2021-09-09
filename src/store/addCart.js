import {  createSlice } from '@reduxjs/toolkit';

const itemStores = JSON.parse(localStorage.getItem('items'));
let arrListItems = itemStores ? itemStores.value : [];

const cartItemId = JSON.parse(localStorage.getItem('listItemIds'));
let arrItems = cartItemId ? cartItemId : [];

const initialState = {
  value: arrListItems,
};

export const addCart = createSlice({
    name  : 'addCart',
    initialState,
    reducers: {
        toggleCart: (state, value) => {
          var item = value.payload;
          const idx = state.value.findIndex(x => x.id === item.id);
          if (idx !== -1) {
            state.value.splice(idx, 1);
            arrItems = arrItems.filter(function (x) {
              return x !== item.id;
            })
            localStorage.setItem('items', JSON.stringify(state));
            localStorage.setItem('listItemIds', JSON.stringify(arrItems));
          } else {
            state.value.push(item);
            arrItems.push(item.id);
            localStorage.setItem('items', JSON.stringify(state));
            localStorage.setItem('listItemIds', JSON.stringify(arrItems));
          }
        },
      },
});

export const { toggleCart } = addCart.actions;

export default addCart.reducer;
