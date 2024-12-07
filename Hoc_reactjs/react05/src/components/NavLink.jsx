import { Link, useLocation, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavLink({ href, children }) {
  // lấy đường dẫn hiện tại pathname
  const { pathname } = useLocation();
  console.log(location);
  // so sánh với đường dẫn trong href
  const match = useMatch({
    path: pathname,
  });
  console.log(match);
  return (
    <li className={`${match} ? "active" : ""`}>
      <Link to={href}>{children}</Link>
    </li>
  );
}
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
