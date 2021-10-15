import { StyledNavLink } from "../Navigation/Navigation.styled";

export function AuthNav() {
  return (
    <>
      <StyledNavLink
        exact
        to="/register"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Register
      </StyledNavLink>
      <StyledNavLink
        to="/login"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Login
      </StyledNavLink>
    </>
  );
}
