import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../redux/authorization";
import { Section } from "../components/Section";
import {
  Input,
  FormButton,
} from "../components/ContactForm/ContactForm.styled";
import { Form, RegisterViewBack } from "./RegisterView.styled";

export default function RegisterView() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <RegisterViewBack>
      <Section>
        {error ? (
          <h2>Something get wrong...</h2>
        ) : (
          <>
            <h1>Sign Up</h1>

            <Form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
                autoComplete="off"
              />

              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
                autoComplete="off"
              />

              <label htmlFor="pass">Password</label>
              <Input
                id="pass"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
                minLength="7"
                required
              />

              <FormButton type="submit">Sign Up</FormButton>
            </Form>
          </>
        )}
      </Section>
    </RegisterViewBack>
  );
}
