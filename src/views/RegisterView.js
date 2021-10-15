import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/authorization";
import { Section } from "../components/Section";
import {
  Input,
  FormButton,
} from "../components/ContactForm/ContactForm.styled";
import { Form, RegisterViewBack } from "./RegisterView.styled";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    alert("Thanks for your registration!");
  };

  return (
    <RegisterViewBack>
      <Section>
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
      </Section>
    </RegisterViewBack>
  );
}
