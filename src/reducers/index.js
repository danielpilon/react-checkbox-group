import { combineReducers } from "redux";
import cliensReducer from "./clientsReducer";

export default combineReducers({ clients: cliensReducer });
