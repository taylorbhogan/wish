import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  to: string;
  text: string;
}

const NavLink = ({ to, text }: NavLinkProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default NavLink;
