import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { getPass } from "../services/GeneratorPassword";
import { copyClipboard } from "../services/CopyClipboard";
const { default: ButtonsInput } = require("./ButtonsInput");

const DivContainerOption = styled.div`
  .container-input {
    .input-pass {
      input#pass {
        position: relative;
        border-bottom: 2px solid
          ${(props) =>
            props.lengthPass > 12 && !props.copied
              ? "#34E749"
              : props.lengthPass >= 8 && !props.copied
              ? "#FEA81C"
              : props.lengthPass < 8 && !props.copied
              ? "#FE4C1C"
              : "transparent"};
      }
    }
  }
`;
const Form = ({ lSpanish, lEnglish }) => {
  /* Password */
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState(true);
  /* Copy pass */
  const [copy, setCopy] = useState(false);
  /* numberState */
  const [number, setNumber] = useState(true);
  /* characterNumber */
  const [character, setCharacter] = useState(true);
  /* characterSpecial */
  const [characterSpecial, setCharacterSpecial] = useState(true);
  /* passLength */
  const [lengthPass, setLengthPass] = useState("12");

  useEffect(() => {
    if (newPass) {
      setPass(getPass(lengthPass, number, character, characterSpecial));
      setNewPass(false);
    } else if (copy) {
      copyClipboard();
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }

    if (!lSpanish && !lEnglish) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [
    lSpanish,
    lEnglish,
    newPass,
    copy,
    lengthPass,
    number,
    character,
    characterSpecial,
  ]);
  const handleInputText = (e) => {
    setPass(e.target.value);
  };
  const handleNumber = (e) => {
    setNewPass(true);
    if (number) setNumber(false);
    else setNumber(true);
  };
  const handleCharacter = (e) => {
    setNewPass(true);
    if (character) setCharacter(false);
    else setCharacter(true);
  };
  const handleCSpecial = (e) => {
    setNewPass(true);
    if (characterSpecial) setCharacterSpecial(false);
    else setCharacterSpecial(true);
  };
  const handleLength = (e) => {
    setNewPass(true);
    setLengthPass(e.target.value);
  };

  const BannerCopy = () => {
    return (
      <div className="banner-copy">
        {lSpanish ? <span>Copiado!</span> : <span>Copied!</span>}
      </div>
    );
  };

  const FormVersion = () => {
    if (lSpanish) {
      return (
        <DivContainerOption className="config" lengthPass={lengthPass}>
          <div className="container-input">
            <div className="input-pass">
              <input
                type="text"
                id="pass"
                onChange={handleInputText}
                value={pass}
              />
              <ButtonsInput setNewPass={setNewPass} setCopy={setCopy} />
            </div>
            {copy && BannerCopy()}
          </div>
          <div className="options">
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Números</p>
                <div className="btn-option">
                  <input type="checkbox" id="option" onChange={handleNumber} />
                  <label htmlFor="option"></label>
                </div>
              </div>
            </div>
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Letras</p>
                <div className="btn-option">
                  <input
                    type="checkbox"
                    id="optionB"
                    onChange={handleCharacter}
                  />
                  <label htmlFor="optionB"></label>
                </div>
              </div>
            </div>
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Símbolos</p>
                <div className="btn-option">
                  <input
                    type="checkbox"
                    id="optionC"
                    onChange={handleCSpecial}
                  />
                  <label htmlFor="optionC"></label>
                </div>
              </div>
            </div>
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Longitud de la contraseña</p>
                <div className="btn-option">
                  <input
                    type="text"
                    className="length-pass"
                    onChange={handleLength}
                    value={lengthPass}
                  />
                </div>
              </div>
            </div>
            <div className="range-option">
              <input
                type="range"
                className="input-range"
                onChange={handleLength}
                value={lengthPass}
                min="1"
                max="50"
              />
            </div>
          </div>
          <div className="container-btn-copy">
            <button className="btn-copy" onClick={() => setCopy(true)}>
              Copiar contraseña
            </button>
          </div>
        </DivContainerOption>
      );
    } else {
      return (
        <DivContainerOption className="config" lengthPass={lengthPass}>
          <div className="container-input">
            <div className="input-pass">
              <input
                type="text"
                id="pass"
                onChange={handleInputText}
                value={pass}
              />
              <ButtonsInput setNewPass={setNewPass} setCopy={setCopy} />
            </div>
            {copy && BannerCopy()}
          </div>
          <div className="options">
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Numbers</p>
                <div className="btn-option">
                  <input type="checkbox" id="option" onChange={handleNumber} />
                  <label htmlFor="option"></label>
                </div>
              </div>
            </div>
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Letters</p>
                <div className="btn-option">
                  <input
                    type="checkbox"
                    id="optionB"
                    onChange={handleCharacter}
                  />
                  <label htmlFor="optionB"></label>
                </div>
              </div>
            </div>
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Simbols</p>
                <div className="btn-option">
                  <input
                    type="checkbox"
                    id="optionC"
                    onChange={handleCSpecial}
                  />
                  <label htmlFor="optionC"></label>
                </div>
              </div>
            </div>
            <div className="container-options">
              <div className="grid-option">
                <p className="option-name">Password Length</p>
                <div className="btn-option">
                  <input
                    type="text"
                    className="length-pass"
                    onChange={handleLength}
                    value={lengthPass}
                  />
                </div>
              </div>
            </div>
            <div className="range-option">
              <input
                type="range"
                className="input-range"
                onChange={handleLength}
                value={lengthPass}
                min="1"
                max="50"
              />
            </div>
          </div>
          <div className="container-btn-copy">
            <button className="btn-copy" onClick={() => setCopy(true)}>
              Copy Password
            </button>
          </div>
        </DivContainerOption>
      );
    }
  };

  return <Fragment>{FormVersion()}</Fragment>;
};
export default Form;
