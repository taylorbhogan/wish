import Input from "../AppUtils/Input";
import React, { useState } from "react";
import ButtonSubmit from "../AppUtils/ButtonSubmit";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <form>
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
        <ButtonSubmit text={"ButtonSubmit"} />
      </form>
    </>
  );
}
