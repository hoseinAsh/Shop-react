import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem : (state, action) => {
      const item = state.products.find((x)=> x.id === action.payload.id);
      if (item) {
        item.quantity+=action.payload.quantity
      }else {
        state.products.push(action.payload)
      }
    },
    delItem: (state, action) => {
      state.products = state.products.filter((x)=> x.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, delItem, resetCart } = cartSlice.actions

export default cartSlice.reducer