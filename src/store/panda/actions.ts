import { IData } from '../../interfaces/interfaces';

export const requestPanda = () => {
  return { type: 'REQUESTED_PANDA' };
};

export const requestPandaSuccess = (data: IData) => {
  return { type: 'REQUESTED_PANDA_SUCCEEDED', url: data.image };
};

export const requestPandaError = () => {
  return { type: 'REQUESTED_PANDA_FAILED' };
};
