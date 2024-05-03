import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import {thunk }from "redux-thunk";
import {logger} from "redux-logger"


const store = legacy_createStore(reducer, applyMiddleware(thunk,logger));

export { store };


