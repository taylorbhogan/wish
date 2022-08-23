import styles from './ButtonSubmit.module.css'

type ButtonSubmitProps = {
  text: string;
};

const ButtonSubmit = ({ text }: ButtonSubmitProps): JSX.Element => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonSubmit;
