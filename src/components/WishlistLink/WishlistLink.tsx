import { Link } from "react-router-dom";
import styles from "./WishlistLink.module.css";

type WishlistLinkProps = {
  name?: string;
  id: string;
  isMine?: boolean;
};

const WishlistLink = ({ name, id, isMine }: WishlistLinkProps): JSX.Element => {
  return (
    <Link
      to={`/${id}`}
      style={
        isMine
          ? { backgroundColor: "var(--blue200)" }
          : { backgroundColor: "var(--blue900)" }
      }
      className={styles.container}
    >
      <h1>{isMine ? "My List" : `${name}'s List`}</h1>
      <p>Gift Ideas Claimed: </p>
    </Link>
  );
};

export default WishlistLink;
