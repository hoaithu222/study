import React from "react";
const init = [];

const userReducer = (state = init, action) => {
  console.log(state, action);
  switch (action.type) {
    case "GET_LIST_USER":
      return [...action.listUser];

    case "ADD":
      return [...state, action.user];

    case "EDIT":
      return state.map((user) =>
        user.MaKH === action.id ? action.data : user
      );
    case "DELETE":
      return state.filter((user) => user.MaKH !== action.id);

    default:
      return state;
  }
};
export default userReducer;
