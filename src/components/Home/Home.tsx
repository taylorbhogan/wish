import WishlistLink from "../WishlistLink";
import styles from "./Home.module.css";
const wishlists = [
  {
    name: "ReAnnen",
    id: "1234",
  },
  {
    name: "Mom",
    id: "1324",
  },
  {
    name: "Amanda",
    id: "1214",
  },
];

type Wishlist = {
  name: string;
  id: string;
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <WishlistLink id={"jd"} isMine={true} />
      {wishlists.map((wishlist: Wishlist, idx: number) => (
        <WishlistLink name={wishlist.name} id={wishlist.id} key={idx} />
      ))}
    </div>
  );
}
