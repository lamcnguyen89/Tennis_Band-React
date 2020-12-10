import React from "react";
import BodyClassName from 'react-body-classname';

/**
 * @author
 * @function ErrorScreen
 **/

const ErrorScreen = (props) => {
  return (
    <BodyClassName className="background-contact">
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
    </BodyClassName>
  );
};

export default ErrorScreen;
