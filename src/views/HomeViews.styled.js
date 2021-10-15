import styled from "@emotion/styled";
import splash from "../images/splash.png";

export const HomeViewBack = styled.div`
  /* position: absolute; */
  background-image: url(${splash});
  background-attachment: fixed;
  background-size: cover;
  background-color: antiquewhite;
  height: 100%;
  width: 100vw;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 60px;
  padding-top: 200px;
  border-bottom: 2px solid #000;
  display: inline-block;
  color: #000;
`;
