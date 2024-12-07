import { useState } from "react";
import Input from "./Input/Input";
import { useCallback } from "react";

export default function Form() {
  const [form, setForm] = useState({});
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(form);
    },
    [form]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          label="Name"
          onChange={handleChangeValue}
          value={form.name}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          onChange={handleChangeValue}
          value={form.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
