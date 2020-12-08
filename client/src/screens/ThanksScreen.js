import Nav from "../components/nav";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import React from "react";

/**
 * @author
 * @function ThanksScreen
 **/

const ThanksScreen = (props) => {
  return (
    <div className="background-contact">
      <Masthead />
      <Nav />
      <main className="container rounded p-2 my-4">
        <h1 className="headingformats">Thanks for your Message!!!!</h1>
        <hr />
        <h4 className="headingformats">
          We'll get back to you as soon as possible.
        </h4>
      </main>
      <Footer />
    </div>
  );
};

export default ThanksScreen;
