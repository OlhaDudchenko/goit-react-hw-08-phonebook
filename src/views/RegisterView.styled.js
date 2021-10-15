import styled from "@emotion/styled";
import splash from "../images/splash.png";

export const RegisterViewBack = styled.div`
  background-image: url(${splash});
  background-attachment: fixed;
  background-size: cover;
  background-color: antiquewhite;
  height: 100%;
  width: 100vw;
  text-align: left;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
