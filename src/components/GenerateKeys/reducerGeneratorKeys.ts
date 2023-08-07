type Action =
  | {
      type: '@key/view-confirm-generate';
      payload: boolean;
    }
  | { type: '@key/view-keys'; payload: boolean }
  | { type: '@key/view-warning'; payload: boolean }
  | {
      type: '@key/login';
      payload: boolean;
    };
interface ModalOptions {
  viewConfirm: boolean;
  viewKeysGenerate: boolean;
  viewWarning: boolean;
  viewLogin: boolean;
}
interface State {
  modal: ModalOptions;
}
export const INITIAL_STATE: State = {
  modal: {
    viewConfirm: false,
    viewKeysGenerate: false,
    viewLogin: false,
    viewWarning: false,
  },
};
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case '@key/login': {
      return {
        ...state,
        modal: {
          ...state.modal,
          viewLogin: action.payload,
        },
      };
    }
    case '@key/view-confirm-generate': {
      return {
        ...state,
        modal: {
          ...state.modal,
          viewConfirm: action.payload,
        },
      };
    }
    case '@key/view-keys': {
      return {
        ...state,
        modal: {
          ...state.modal,
          viewKeysGenerate: action.payload,
        },
      };
    }
    case '@key/view-warning': {
      return {
        ...state,
        modal: {
          ...state.modal,
          viewWarning: action.payload,
        },
      };
    }
  }
};
