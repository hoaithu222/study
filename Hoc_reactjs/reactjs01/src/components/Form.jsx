import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [users, setUsers] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log(form);
    const errorsBag = {};
    if (!form.email) {
      errorsBag.email = "Email không được để trống";
    }
    if (!form.password) {
      errorsBag.password = "Password không được để trống";
    }
    setErrors(errorsBag);
    if (!Object.keys(errorsBag).length) {
      // khong có lỗi
      setUsers([...users, form]);
      setForm({ email: "", password: "" });
    }
  };
  console.log(users);
  return (
    <div className="w-50 mx-auto py-3">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Email..."
            onChange={handleChangeValue}
            value={form.email}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password..."
            onChange={handleChangeValue}
            value={form.password}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <hr />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.email}-{user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
