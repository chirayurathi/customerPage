import React, {
  createContext,
  useReducer,
  Dispatch,
  FC,
  ReactNode,
} from "react";
import ContextInterface from "./interfaces/contextInterface";
import { loadingReducer } from "./reducers";
const initialState: ContextInterface = {
  loading: false,
  search: "",
};
const LoadingContext = createContext<{
  state: ContextInterface;
  dispatch: Dispatch<{ type: string; search?: string }>;
}>({ state: initialState, dispatch: () => {} });

const LoadingProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer<
    (
      state: ContextInterface,
      action: { type: string; search?: string }
    ) => ContextInterface
  >(loadingReducer, initialState as ContextInterface);
  return (
    <LoadingContext.Provider value={{ state, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
