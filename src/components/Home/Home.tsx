import { useEffect } from "react";
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
  useEffect(() => {
    const fetchWishlists = async () => {

      try {
        const res = await fetch("i")

        if (!res.ok) throw res;
        console.log("res",res);

        const data = await res.json();
        console.log("data",data);


      } catch (e) {
        console.log("error",e);

      }

    };
    fetchWishlists()
  },[]);

  return (
    <div className={styles.wrapper}>
      <WishlistLink id={"jd"} isMine={true} />
      {wishlists.map((wishlist: Wishlist, idx: number) => (
        <WishlistLink name={wishlist.name} id={wishlist.id} key={idx} />
      ))}
    </div>
  );
}
