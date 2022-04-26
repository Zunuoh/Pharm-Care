import { configureStore } from "@reduxjs/toolkit";
import DrugReducer from "./drug-reducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, DrugReducer);

const store = configureStore({
  reducer: {
    drugs: persistedReducer,
    middleware: [thunk],
  },
});

export { store };
