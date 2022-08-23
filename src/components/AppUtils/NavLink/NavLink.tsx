import { Link } from "react-router-dom"
import styles from './NavLink.module.css'

interface Props {
  to: string;
  text: string;
}


const NavLink = ({ to, text }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <Link to={to}>{text}</Link>
    </div>
  )
}

export default NavLink;
