import Nav from "../components/nav";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import React from "react";

/**
 * @author
 * @function StoreScreen
 **/

const StoreScreen = (props) => {
  return (
    <div className="background-store">
      <Masthead />
      <Nav />
      <main className="container p-2 my-4 rounded">
        <h1 className="headingformats">Official Store</h1>
        <hr />

        <article className="row">
          <article className="col-12 mt-3 p-3">
            <article>
              <p>
                I have to embed the merchtable store here on this page. Need
                Tennis's permission to do that.
              </p>
            </article>
          </article>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default StoreScreen;
