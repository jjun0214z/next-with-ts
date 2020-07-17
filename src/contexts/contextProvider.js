import React, { createContext, useReducer } from "react";
import rootReducer from "../store/reducers";

const stroe = createContext(null);
function useStore(rootReducer, state) {
  const initialState = state || rootReducer(undefined, { type: undefined });
  return useReducer(rootReducer, initialState);
}

const ContextProvider = (props) => {
  const [state, dispatch] = useStore(rootReducer);

  return (
    <stroe.Provider value={{ state, dispatch }}>
      {props.children}
    </stroe.Provider>
  );
};

export { stroe };
export default ContextProvider;
