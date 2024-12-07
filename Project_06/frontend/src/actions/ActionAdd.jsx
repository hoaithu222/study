export const addUser = (user) => {
  return {
    type: "ADD",
    user: user,
  };
};

export const getUser = (listUser) => {
  return {
    type: "GET_LIST_USER",
    listUser: listUser,
  };
};

export const editUser = (id, data) => {
  return {
    type: "EDIT",
    id: id,
    data: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE",
    id: id,
  };
};
