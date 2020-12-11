import { Fragment, useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  /* StateLang */
  const [lSpanish, setLSpanish] = useState(false);
  const [lEnglish, setLEnglish] = useState(false);

  /* darkmode */

  const [darkMode, setDarkMode] = useState(false);

  const BtnLang = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-eng")) {
      setLEnglish(true);
      if (lSpanish) {
        setLSpanish(false);
      }
    } else if (e.target.classList.contains("btn-esp")) {
      setLSpanish(true);
      if (lEnglish) {
        setLEnglish(false);
      }
    }
  };

  const Banner = () => {
    if (lSpanish === false && lEnglish === false) {
      return (
        <div className="container-banner-lang">
          <div className="window">
            <h3>
              Welcome <span>😀</span>
            </h3>
            <div className="container-btns">
              <button className="btn-eng" onClick={BtnLang}>
                English
              </button>
              <button className="btn-esp" onClick={BtnLang}>
                Spanish
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <Fragment>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {Banner()}
      {lSpanish ? (
        <h1 className="body__title">Genera una contraseña segura</h1>
      ) : (
        <h1 className="body__title">Generate a secure password</h1>
      )}
      <Form lSpanish={lSpanish} lEnglish={lEnglish} />

      <Footer
        lSpanish={lSpanish}
        setLSpanish={setLSpanish}
        lEnglish={lEnglish}
        setLEnglish={setLEnglish}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </Fragment>
  );
};
export default Home;
