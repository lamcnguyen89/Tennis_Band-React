import Nav from "../components/nav";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import React from "react";

/**
 * @author
 * @function ErrorScreen
 **/

const ErrorScreen = (props) => {
  return (
    <div className="background-contact">
      <Masthead />
      <Nav />
      <main className="container p-2 mb-4 rounded">
        <h1 className="headingformats">
          There was an error submitting your Form...
        </h1>
        <hr />
        <h4 className="headingformats">
          Fill out all the fields on the form and/or just click on the available
          pages on this portfolio.
        </h4>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorScreen;
