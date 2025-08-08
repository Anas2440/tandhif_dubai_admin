// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { rootReducer } from "../ReduxStore/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
