import { IData } from '../../interfaces/interfaces';

export const requestFox = () => {
  return { type: 'REQUESTED_FOX' };
};

export const requestFoxSuccess = (data: IData) => {
  return { type: 'REQUESTED_FOX_SUCCEEDED', url: data.image };
};

export const requestFoxError = () => {
  return { type: 'REQUESTED_FOX_FAILED' };
};


