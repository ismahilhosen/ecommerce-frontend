import { applyMiddleware, createStore } from "redux";
import { getUsersReducer } from "./services/reducers/userReducer";
import { thunk } from "redux-thunk";

const store = createStore(getUsersReducer, applyMiddleware(thunk));

export default store;
