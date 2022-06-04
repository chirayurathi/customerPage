import { SET_LOADING, SET_SEARCH, UNSET_LOADING } from "./constants";
import ContextInterface from "./interfaces/contextInterface";
export const loadingReducer = (
  state: ContextInterface,
  action: { type: string; search?: string }
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_SEARCH:
      if (action.search !== undefined)
        return {
          ...state,
          search: action.search,
        };
      else return state;
    default:
      return {
        search: "",
        loading: false,
      };
  }
};
