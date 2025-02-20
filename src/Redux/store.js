import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Required for async actions
import inventoryReducer from "./mutations"; // Ensure correct path to the reducer

const store = createStore(inventoryReducer, applyMiddleware(thunk));

export default store;
