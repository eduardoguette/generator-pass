/* import { useState } from "react"; */
import styled from "styled-components";
const DivReloadCopy = styled.div`
  position: absolute;
  display: flex;
  right: .2em;
  background: white;
  span {
    border-radius: 1em;
    cursor: pointer;
    user-select: none;
    padding: 0.4em;
    color: black;
    transition: 0.2s linear all;
    font-size: 1.2em;
  }
  .reload {
    transform: ${(props) => `rotate(${props.reload}deg)`};
  }
  @media screen and (min-width: 540px) {
    font-size: 20px;
  }
  @media screen and (min-width: 720px) {
    font-size: 30px;
  }
`;

let count = 180;

const ButtonsInput = ({ setNewPass, setCopy }) => {
  const handleBtns = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("reload")) {
      count += 180;
      setNewPass(true);
      setTimeout(() => {
        setNewPass(false);
      }, 100);
    } else if (e.target.classList.contains("copy")) {
      setCopy(true);
     
    }
  };
  return (
    <DivReloadCopy onClick={handleBtns} reload={count}>
      <span className="material-icons reload">autorenew</span>
      <span className="material-icons copy">content_copy</span>
    </DivReloadCopy>
  );
};
export default ButtonsInput;
