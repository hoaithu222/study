const PostUser = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/customers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Lỗi khi thêm khách hàng");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default PostUser;
