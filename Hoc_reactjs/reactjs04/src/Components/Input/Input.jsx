import React, { useId } from "react";
import PropTypes from "prop-types";
import { memo } from "react";

function Input({
  type = "text",
  name,
  label,
  value = "",
  onChange = () => {},
}) {
  const id = useId();
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={`${label}...`}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default memo(Input);
