import { Link } from "react-router-dom"

export default function Splash() {
  return (
    <div>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
