type ButtonSubmitProps = {
  text: string;
};

const ButtonSubmit = ({ text }: ButtonSubmitProps): JSX.Element => {
  return <button>{text}</button>;
};

export default ButtonSubmit;
