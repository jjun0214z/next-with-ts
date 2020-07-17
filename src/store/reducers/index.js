import reducerA from "./reducerA";
import reducerB from "./reducerB";
import reducerC from "./reducerC";

function combineReducers(reducerDict) {
  const _initialState = getInitialState(reducerDict);
  return function (state = _initialState, action) {
    return Object.keys(reducerDict).reduce((acc, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...acc, [curr]: slice };
    }, state);
  };
}

// Helpers
function getInitialState(reducerDict) {
  return Object.keys(reducerDict).reduce((acc, curr) => {
    const slice = reducerDict[curr](undefined, { type: undefined });
    return { ...acc, [curr]: slice };
  }, {});
}

const rootReducer = combineReducers({
  globalState: combineReducers({ a: reducerA, b: reducerB }),
  group2: reducerC,
});

export default rootReducer;
