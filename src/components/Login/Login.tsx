import Input from "../AppUtils/Input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonSubmit from "../AppUtils/ButtonSubmit";
import styles from "./Login.module.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({email,password});
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Welcome back.</h1>
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
        <ButtonSubmit text={"LOG IN"} />
        <p>Need an account? <Link className={styles.link} to="/signup">Sign up.</Link></p>
      </form>
    </div>
  );
}
