import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
const Context = createContext();
export let store = {};
export const Provider = (props) => {
  const [rootState, setRootState] = useState({});
  store = props.store;
  const state = store.getState();

  useEffect(() => {
    setRootState(store.getState());
    store.setListener((rstate) => {
      setRootState(rstate);
    });
  }, [Object.keys(state).length]);

  return (
    <Context.Provider value={{ ...rootState }}>
      {!!Object.keys(rootState).length && props.children}
    </Context.Provider>
  );
};

export const useDispatch = () => {
  return store.dispatch;
};
export const useSelector = (fn) => {
  const state = useContext(Context);
  const memoResult = useMemo(() => fn(state), [state]);
  return memoResult;
};

export const combineReducers =
  (reducers) =>
  (state = {}, action) =>
    Object.keys(reducers).reduce((acc, c) => {
      const f = reducers[c];

      acc[c] = { ...f(state[c], action) };
      return acc;
    }, {});

export function createStore(reducer) {
  let currentState = {};
  let listener;
  const getState = () => currentState;

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    if (listener) {
      listener(currentState);
    }

    return action;
  };
  dispatch({});

  const setListener = (fn) => {
    listener = fn;
  };

  const subscribe = (fn) => {
    listener = fn;
  };
  return {
    dispatch: dispatch,
    getState: getState,
    setListener: setListener,
    subscribe: subscribe,
  };
}
