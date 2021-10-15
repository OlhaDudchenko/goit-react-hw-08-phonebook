import React, { useState } from "react";
import { Dropdown, ThemmeButton, ThemmeButtons } from "./DropDownMenu.styled";
import { useTheme } from "../../context/theme";
import paper from "../../images/paper.png";
import stars from "../../images/stars.png";

export function DropDownMenu() {
  const [visible, setVisible] = useState(false);

  const { updateTheme } = useTheme();

  const toggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <Dropdown>
      <ThemmeButton type="button" className="Dropdown__toggle" onClick={toggle}>
        {visible ? "Hide" : "Chooze your theme"}
      </ThemmeButton>

      {visible && (
        <div className="Dropdown__menu">
          <ThemmeButtons
            onClick={() => {
              updateTheme({
                src: stars,
              });
            }}
          >
            Dark
          </ThemmeButtons>

          <ThemmeButtons
            onClick={() => {
              updateTheme({
                src: paper,
              });
            }}
          >
            Light
          </ThemmeButtons>
        </div>
      )}
    </Dropdown>
  );
}
