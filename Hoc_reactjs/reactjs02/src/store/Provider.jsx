// chứa các state của store

// context và useReducer

import React, { createContext, useReducer } from "react";
import Proptypes from "prop-types";
import { rootReducer, initialState } from "./rootReducer";
export const ProviderContext = createContext();

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}
Provider.propTypes = {
  children: Proptypes.node,
};
