import React, { useState } from 'react';
import { ButtonGroupStyled } from './button-group.styled';

type ButtonGroupProps = {
  setMetric: React.Dispatch<React.SetStateAction<string>>;
}
const ButtonGroup = ({setMetric}: ButtonGroupProps ) => {
  const [active, setActive] = useState("1");

  const handleClick = (event: { target: { id: React.SetStateAction<string>; }; }) => {
    if (event.target.id.toString() === "1") setMetric("unitGroup=uk");
    if (event.target.id.toString() === "2") setMetric("unitGroup=us");
    setActive(event.target.id);
  }

  return (
    <>
      <ButtonGroupStyled id={"1"} key={1} className={active === "1" ? "active" : ""} onClick={handleClick}>
        {"°C"}
      </ButtonGroupStyled>
      <ButtonGroupStyled id={"2"} key={2} className={active === "2" ? "active" : ""} onClick={handleClick}>
        {"°F"}
      </ButtonGroupStyled>
    </>
  );
}

export default ButtonGroup;
