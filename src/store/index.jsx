import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { tasksMiddleware } from "./Tasks";
import modalReducer from "./Modal";
import menuReducer from "./Menu";
const store = configureStore({
  reducer: { tasks: tasksReducer, modal: modalReducer, menu: menuReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksMiddleware),
});
export default store;
