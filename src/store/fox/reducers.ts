import { IActions, IState } from '../../interfaces/interfaces';

const initialState: IState = {
  url: "",
  loading: false,
  error: false
};

const foxImage = (state = initialState, action: IActions): IState => {
  switch (action.type) {
    case 'REQUESTED_FOX':
      return {
        url: "",
        loading: true,
        error: false
      };
    case 'REQUESTED_FOX_SUCCEEDED':
      return {
        url: action.url,
        loading: false,
        error: false
      };
    case 'REQUESTED_FOX_FAILED':
      return {
        url: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default foxImage;
