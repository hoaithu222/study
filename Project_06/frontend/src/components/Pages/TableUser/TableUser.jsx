import GetUser from "../../../server/getUser";
import "./style.css";
import { useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
} from "../../../actions/actionAdd";
import PostUser from "../../../server/PostUser";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import PutUser from "../../../server/PutUser";
import DeleteUser from "../../../server/DeleteUser";

export default function TableUser() {
  const [isShowForm, setIsShowForm] = useState(false);
  const users = useSelector((state) => state.user);
  const [isLoading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [userAdd, setUserAdd] = useState({
    TenKh: "",
    diaChi: "",
    soDT: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUser();
      dispatch(getUser(data));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const handleChange = (e) => {
    setUserAdd({
      ...userAdd,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isEdit) {
      await PutUser(userAdd.MaKH, userAdd);
      dispatch(editUser(userAdd.MaKH, userAdd));
    } else {
      await PostUser(userAdd);
      dispatch(addUser(userAdd));
    }

    const data = await GetUser();
    dispatch(getUser(data));
    setIsShowForm(false);
    setUserAdd({ TenKh: "", diaChi: "", soDT: "" });
    setIsEdit(false);
    setLoading(false);
  };
  const handleEdit = (user) => {
    setIsShowForm(true);
    setIsEdit(true);
    setUserAdd({
      TenKh: user.TenKH || "",
      diaChi: user.DiaChi || "",
      soDT: user.SoDT || "",
      MaKH: user.MaKH || "",
    });
  };
  const handleDelete = async (user) => {
    setLoading(true);

    console.log(user);
    await DeleteUser(user.MaKH);
    dispatch(deleteUser(user.MaKH));
    setLoading(false);
  };

  const handleCancel = () => {
    setIsShowForm(false);
    setIsEdit(false);
    setUserAdd({ TenKh: "", diaChi: "", soDT: "" });
  };

  return (
    <div className="main">
      <div className="container">
        <div>
          <button className="open_form" onClick={() => setIsShowForm(true)}>
            Thêm khách hàng
          </button>
        </div>
        <div className="table-user">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <table>
              <thead>
                <tr>
                  <th className="ID">Mã khách hàng</th>
                  <th className="name">Tên khách hàng</th>
                  <th className="address">Địa chỉ</th>
                  <th className="phone">SDT</th>
                  <th className="">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.MaKH}>
                      <td>{user.MaKH}</td>
                      <td>{user.TenKH}</td>
                      <td>{user.DiaChi}</td>
                      <td>{user.SoDT}</td>
                      <td>
                        <button
                          className="btn_add"
                          onClick={() => handleEdit(user)}
                        >
                          Sửa
                        </button>
                        <button
                          className="btn_cancel"
                          onClick={() => {
                            handleDelete(user);
                          }}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Chưa có danh sách khách hàng</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {isShowForm && (
        <div className="form">
          <form className="add_user" onSubmit={handleChangeSubmit}>
            <h3 className="form_title">
              {isEdit ? "Form thêm sửa khách hàng" : "Form thêm khách hàng"}
            </h3>
            <div>
              <label>
                Tên KH:
                <input
                  type="text"
                  name="TenKh"
                  value={userAdd.TenKh}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="input">
              <label>
                Địa Chỉ:
                <input
                  type="text"
                  name="diaChi"
                  value={userAdd.diaChi}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="input">
              <label>
                Số Điện Thoại:
                <input
                  type="text"
                  name="soDT"
                  value={userAdd.soDT}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="btn_container">
              <button className="btn_add" type="submit">
                {isEdit ? "Cập nhật" : "Thêm"}
              </button>
              <button
                className="btn_cancel"
                type="button"
                onClick={handleCancel}
              >
                Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
