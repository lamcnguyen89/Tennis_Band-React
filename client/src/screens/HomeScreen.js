import Nav from "../components/nav";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import React from "react";
import ProfileImage from '../images/Tennis_Profile.png'

/**
 * @author
 * @function HomeScreen
 **/

const HomeScreen = (props) => {
  return (
    <div className="background-about">
      <Masthead />
      <Nav />
      <main className="container p-2 mb-4 rounded">
        <h1 className="headingformats">About Us</h1>
        <hr />

        <article className="row">
          <article className="col-12 mt-3 p-3">
            <article>
              <img
                className="aboutImg rounded mr-4 mb-3"
                src={ProfileImage}
                alt="Tennis"
                width="50%"
                height="50%"
              />

              <p>
                We’re a husband and wife team by the names of Alaina Moore and
                Patrick Riley. We met, fell in love, and married after meeting
                in a philosophy className at the University of Colorado. After
                graduating from college, we undertook an 8-month long sailing
                expedition to figure out our lives and vision.
              </p>
              <p>
                There's a spiritual teacher named Osho. In one of his books, he
                says that before a man and woman get married, they should first
                be made to go on a honeymoon together and be stuck with only
                each other for company for many months. If they can make it
                through this ordeal without hating eachother... Then they can
                marry.
              </p>
              <p>
                We made it through this 8 month long test. Through all the
                trials and joy of this expedition, we deepened our commitment to
                each other and created our band, Tennis.
              </p>
            </article>
          </article>
        </article>

        <h3 className="headingformats">
          <a href="/music" target="_self" alt="All Tennis's Music">
            Listen to and Support our Music Here
          </a>
        </h3>

        <article className="container p-2 mb-4 rounded">
          <h1 className="headingformats">Tour Dates</h1>
          <h5 className="headingformats">Get Tickets Below!</h5>
          <hr />

          <div className="table-responsive">
            <table className="table table-hover">
              <thead></thead>
              <tbody id="tourRows"></tbody>
            </table>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default HomeScreen;
