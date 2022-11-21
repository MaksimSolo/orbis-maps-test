import {combineReducers,  legacy_createStore as createStore} from "redux";
import {layer1Reducer} from "./layer1-reducer";

const rootReducer = combineReducers({
  layer1: layer1Reducer,
});

export const store = createStore(rootReducer,);


// types
export type AppRootStateType = ReturnType<typeof rootReducer>;



// @ts-ignore
window.store = store;
