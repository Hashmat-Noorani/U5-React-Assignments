export const USER = "USER";
export const GET_TASK = "GET_TASK";
export const SORT = "SORT";
export const LOGOUT = "LOGOUT";

export const login = (data) => {
  return {
    type: USER,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setData = (data) => {
  return {
    type: GET_TASK,
    payload: data,
  };
};

export const sort = (by) => {
  return {
    type: SORT,
    payload: by,
  };
};
