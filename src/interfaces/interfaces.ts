export interface IData {
  status: string,
  image: string,
}

export interface IState {
  url: string,
  loading: boolean,
  error: boolean
}

export interface IActions {
  type: string,
  url: string
}

export interface IStore {
  birbImage: IState,
  foxImage: IState,
  pandaImage: IState
}

export interface IHandleClick {
  (): void
}
