import { ADD_TODO } from "./actionType";
const initState = {
  todos: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state, payload],
      };
    default:
      return state;
  }
};
