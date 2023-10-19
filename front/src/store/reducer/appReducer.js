import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'token': {
      const token = action.payload.token;
      return {
        ...state,
        token,
      };
    }
    default:
      return state;
  }
};
