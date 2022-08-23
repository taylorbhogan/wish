import React, { useState } from "react";
import Input from "../AppUtils/Input";
import ButtonSubmit from "../AppUtils/ButtonSubmit";
import styles from "./Signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, groupCode, email, password, confirmPassword });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Let's get you signed up.</h1>
        <Input
          placeholder="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Input
          placeholder="groupCode"
          value={groupCode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGroupCode(e.target.value)
          }
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        {password.length > 0 && (
          <Input
            placeholder="confirmPassword"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        )}
        <ButtonSubmit text={"SIGN UP"} />
      </form>
    </div>
  );
};

export default Signup;
