import NavLink from "../AppUtils/NavLink"
import styles from './Splash.module.css'

export default function Splash() {
  return (
    <div className={styles.container}>
      <NavLink to="/login" text="Log In" />
      <NavLink to="/signup" text="Sign Up" />
    </div>
  )
}
