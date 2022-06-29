import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "All",
    editItem: {},
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    updateItem: (state, action) => {
      const allItems = [...state.items];
      state.items = allItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item
      );
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleStatus: (state, action) => {
      const allItems = [...state.items];
      state.items = allItems.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    },
    deleteItem: (state, action) => {
      const allItems = [...state.items];
      state.items = allItems.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      state.editItem = { ...action.payload };
    },
  },
});

export const {
  addItem,
  updateItem,
  addFilter,
  toggleStatus,
  editItem,
  deleteItem,
} = tasksSlice.actions;
export default tasksSlice.reducer;
