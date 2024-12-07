import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <div>
          <label>Email :</label>
          <input type="email" name="email" placeholder="Vui lòng nhập email " />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Vui lòng nhập password "
          />
        </div>
      </form>
    </div>
  );
}
