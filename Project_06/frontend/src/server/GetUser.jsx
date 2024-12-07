const GetUser = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/customers");
    if (!response.ok) {
      throw new Error("Lỗi khi lấy dữ liệu khách hàng");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default GetUser;
