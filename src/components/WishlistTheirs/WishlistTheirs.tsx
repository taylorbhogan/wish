import { useParams } from "react-router-dom";
import GiftCard from "../GiftCard";
import { Gift } from "../../interfaces";
import styles from "./WishlistTheirs.module.css";

export default function WishlistTheirs() {
  const { wishlistId } = useParams();

  const gifts = [
    {
      name: "Cloth napkins",
      description: "For dining",
    },
    {
      name: "Rechargeable hand warmers",
      description: "For camping outdoors",
    },
    {
      name: "Lems shoes",
      description: "Size 11 Primals",
    },
    {
      name: "Cold brew supplies",
      description: "Just like Taylor's",
      url: "www.google.com",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>ReAnnen's List</h1>
        {gifts.map((gift: Gift, idx: number) => (
          <GiftCard gift={gift} key={idx} />
        ))}
      </div>
    </div>
  );
}
