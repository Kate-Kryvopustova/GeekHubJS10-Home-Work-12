export interface IData {
  message: string,
  status: string
};

export interface IState {
  url: string,
  loading: boolean,
  error: boolean
};

export interface IActions {
  type: string,
  url: string
};

export interface IStore {
  dogImage: IState
};

export interface IHandleClick {
  (): void
};
