import styles from "./WishlistLink.module.css"

type WishlistLinkProps = {
  name?: string;
  id: string;
  isMine?: boolean;
};

const WishlistLink = ({ name, id, isMine }: WishlistLinkProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>{isMine ? "My List" : `${name}'s List`}</h1>
      <p>Gift Ideas Claimed: </p>
    </div>
  );
};

export default WishlistLink;
