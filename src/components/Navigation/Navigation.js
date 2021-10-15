import { useSelector } from "react-redux";
import { StyledNavLink } from "./Navigation.styled";
import { authSelectors } from "redux/authorization";

export function Navigation() {
  const isLogged = useSelector(authSelectors.getLogged);
  return (
    <nav>
      <StyledNavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Home
      </StyledNavLink>
      {isLogged && (
        <StyledNavLink
          to="/contacts"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Contacts
        </StyledNavLink>
      )}
    </nav>
  );
}
