import React,{createContext,useContext,useReducer} from "react";
import { intialState} from "./reducer";

//Prepares the dataLayer
export const StateContext=createContext();

//Wrap out app and provide the Data layer
export const StateProvider =({reducer,intialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue=()=>useContext(StateContext);