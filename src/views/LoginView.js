import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../redux/authorization";
import { Section } from "../components/Section";
import {
  Input,
  FormButton,
} from "../components/ContactForm/ContactForm.styled";
import { LoginViewBack, Form } from "./Login.styled";

export default function LoginView() {
  const dispatch = useDispatch();
  const isLogged = useSelector(authSelectors.getLogged);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <LoginViewBack>
      <Section>
        <h1>Sign In</h1>

        <Form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <label htmlFor="pass">Password</label>
          <Input
            id="pass"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <FormButton type="submit">Sign In</FormButton>
        </Form>
      </Section>
    </LoginViewBack>
  );
}
