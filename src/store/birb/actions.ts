import { IData } from '../../interfaces/interfaces';

export const requestBirb = () => {
  return { type: 'REQUESTED_BIRB' };
};

export const requestBirbSuccess = (data: IData) => {
  return { type: 'REQUESTED_BIRB_SUCCEEDED', url: data.image };
};

export const requestBirbError = () => {
  return { type: 'REQUESTED_BIRB_FAILED' };
};

