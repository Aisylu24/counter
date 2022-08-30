import {combineReducers, createStore} from "redux";
import {valuesReducer} from "./values-reducer";
import {loadState, saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    values: valuesReducer
})

export const store = createStore(rootReducer, loadState());

store.subscribe(()=> {
   saveState({
       values: store.getState().values
   })
})

export type AppRootStateType = ReturnType<typeof rootReducer>


