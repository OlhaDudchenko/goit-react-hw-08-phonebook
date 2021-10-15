import splash from "../images/splash.png";

export const theme = Object.freeze({
  colors: {
    white: "#ffffff",
    BorderColor: "rgb(255, 222, 173)",
    InputColor: "rgba(255, 248, 220, 0.5)",
    ButtonColor: "rgb(255, 248, 220)",
    BackgroundColor: "#faebd7",
    transparent: "transparent",
    dark: "rgb(114, 97, 105)",
  },
  BackgroundRepeat: "repeat",
  BackgroundPosition: "50% 50%",
  BackgroundSize: "100%",
  animation: "250ms",
  time: "cubic-bezier(0.4, 0, 0.2, 1)",
  src: splash,
  transaction: {
    time: "250ms",
    timeFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});
