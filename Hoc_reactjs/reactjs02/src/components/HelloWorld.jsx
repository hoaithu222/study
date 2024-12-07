import PropTypes from "prop-types";
export default function HelloWorld({ name, age }) {
  console.log(name, age);

  return <div>HelloWorld</div>;
}
HelloWorld.propTypes = { name: PropTypes.string, age: PropTypes.number };
