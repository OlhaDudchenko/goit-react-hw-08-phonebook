import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  background-color: ${({ pathname, theme }) => {
    if (pathname === "/contacts") {
      return theme.colors.transparent;
    } else {
      return theme.colors.BackgroundColor;
    }
  }};
`;
