import { combineReducers } from "redux";
import { IState, IActions } from '../interfaces/interfaces';

const initialState: IState = {
  url: "",
  loading: false,
  error: false
};

const dogImage = (state = initialState, action: IActions) => {
  switch (action.type) {
    case "REQUESTED_DOG":
      return {
        url: "",
        loading: true,
        error: false
      };
    case "REQUESTED_DOG_SUCCEEDED":
      return {
        url: action.url,
        loading: false,
        error: false
      };
    case "REQUESTED_DOG_FAILED":
      return {
        url: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default combineReducers({ dogImage });