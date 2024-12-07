const DeleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/customers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Lỗi khi xóa khách hàng");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default DeleteUser;
