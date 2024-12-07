const PutUser = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:3000/api/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Lỗi khi sửa khách hàng");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default PutUser;
