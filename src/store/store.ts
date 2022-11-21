import {combineReducers, legacy_createStore as createStore} from "redux";
import {layer1Reducer, Layer1ReducerActionsType} from "./layer1-reducer";

const rootReducer = combineReducers({
  layer1: layer1Reducer,
});

export const store = createStore(rootReducer,);


// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionsType = Layer1ReducerActionsType


// @ts-ignore
window.store = store;
