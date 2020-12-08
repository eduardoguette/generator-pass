import { Fragment } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <h1 className="body__title">Genera una contraseña segura</h1>
      <Form />
      
      <Footer/>
    </Fragment>
  );
};
export default Home;
