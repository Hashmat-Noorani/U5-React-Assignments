import { USER, SORT, GET_TASK, LOGOUT } from "./actions";

const init = {
  isAuth: false,
  users: [],
  orders: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USER:
      return { ...store, isAuth: true };
    case SORT:
      return {
        ...store,
        orders: [...store.orders].sort((a, b) => {
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0;
        }),
      };
    case GET_TASK:
      return { ...store, orders: payload };
    case LOGOUT:
      return { ...store, isAuth: false };
    default:
      return store;
  }
};
