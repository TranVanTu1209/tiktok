import { useContext, createContext, useReducer } from 'react';

const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext);