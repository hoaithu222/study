import PropTypes from "react";

export default function User({ name, age }) {
  return (
    <div>
      <h1>Tên :{name}</h1>
      <p>Tuổi : {age}</p>
    </div>
  );
}
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
