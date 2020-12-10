import React from "react";
import BodyClassName from 'react-body-classname';

/**
 * @author
 * @function ThanksScreen
 **/

const ThanksScreen = (props) => {
  return (
    <BodyClassName className="background-contact">
      <main className="container rounded p-2 my-4">
        <h1 className="headingformats">Thanks for your Message!!!!</h1>
        <hr />
        <h4 className="headingformats">
          We'll get back to you as soon as possible.
        </h4>
      </main>
    </BodyClassName>
  );
};

export default ThanksScreen;
