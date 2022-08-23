import styles from "./Input.module.css"

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, placeholder }: InputProps): JSX.Element => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
