const SET_USER = 'user/set_user';

const initialState = {
  user: {},
  authData: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state
  }
};

export function setUser(payload) {
  return {
    payload,
    type: SET_USER
  };
}

export default user;
