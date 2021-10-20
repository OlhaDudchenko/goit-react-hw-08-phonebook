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
  const error = useSelector(authSelectors.getError);
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setUser({ email: "", password: "" });
  };

  return (
    <LoginViewBack>
      <Section>
        {error ? (
          <h2>Something get wrong...</h2>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </Section>
    </LoginViewBack>
  );
}
