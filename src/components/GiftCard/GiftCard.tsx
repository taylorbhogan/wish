import ButtonSubmit from "../AppUtils/ButtonSubmit";
import { Gift } from "../../interfaces";
import styles from "./GiftCard.module.css";

const GiftCard = ({ gift }: { gift: Gift }): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{gift.name}</h2>
      <div className={styles.info}>
        {gift.description && <p>{gift.description}</p>}
        {gift.url && <a href={gift.url}>LINK</a>}
      </div>
      <ButtonSubmit text="CLAIM" />
    </form>
  );
};

export default GiftCard;
