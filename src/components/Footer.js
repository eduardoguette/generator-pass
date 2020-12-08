import { useState } from "react";
import styled from "styled-components";
const DivFooter = styled.div`
  .list-lang ul .select {
    span {
      color: ${(props) => (props.darkMode ? "white" : "black")};
    }
  }
`;
const Footer = ({
  lSpanish,
  lEnglish,
  setLSpanish,
  setLEnglish,
  darkMode,
  setDarkMode,
}) => {
  const [optLang, setOptLang] = useState(false);

  const handleChangeLang = (e) => {
    e.preventDefault();
    if (optLang) setOptLang(false);
    else setOptLang(true);
    if (e.target.className === "selected esp") {
      console.log("esp");
      setLSpanish(true);
      if (lEnglish) {
        setLEnglish(false);
      }
    } else if (e.target.className === "selected eng") {
      console.log("eng");
      setLEnglish(true);
      if (lSpanish) {
        setLSpanish(false);
      }
    }
  };
  const OptionsL = () => {
    return (
      <span className="nw-list">
        <li className="selected esp">Español</li>
        <li className="selected eng">English</li>
      </span>
    );
  };

  return (
    <DivFooter className="footer" optLang={optLang} darkMode={darkMode}>
      <div className="list-lang" onClick={handleChangeLang}>
        <ul>
          <li className="select">
            <span className="material-icons">language</span>
            {lSpanish ? (
              <span className="selected">Español</span>
            ) : (
              <span className="selected">English</span>
            )}
            <span className="material-icons">keyboard_arrow_up</span>
          </li>
          {optLang && OptionsL()}
        </ul>
      </div>
      <p className="creator">© 2020 Eduardo Guette. All Rights Reserved.</p>
    </DivFooter>
  );
};
export default Footer;
