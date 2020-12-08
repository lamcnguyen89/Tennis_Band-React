import Nav from "../components/nav";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import React from "react";
import {Link} from "react-router-dom";

/**
 * @author
 * @function AlbumScreen
 **/

const AlbumScreen = (props) => {
  return (
    <div className="background-music">
      <Masthead />
      <Nav />
      <main className="container p-2 mb-4 rounded">
        <h1 className="headingformats">Our Music</h1>
        <h5 className="headingformats">
          Listen to and Support our Albums Below!
        </h5>
        <hr />

        <article className="row">
          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="/swimmer" target="_self">
                <img
                  src="./images/albums/Swimmer.png"
                  className="cardy-img-top img-fluid rounded"
                  alt="Tennis: Swimmer(2020)"
                />
              </Link>
              <p className="card-title">Swimmer (February 2020)</p>
            </article>
          </article>

          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="/wecandiehappy" target="_self">
                <img
                  src="./images/albums/We-Can-Die-Happy.png"
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: We Can Die Happy(November, 2017)"
                />
              </Link>
              <p className="card-title">We Can Die Happy (November 2017)</p>
            </article>
          </article>
        </article>

        <article className="row">
          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="/yoursconditionally" target="_self">
                <img
                  src="./images/albums/Yours-Conditionally.png"
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: Yours Conditionally(March, 2017)"
                />
              </Link>
              <p className="card-title">Yours Conditionally (March 2017)</p>
            </article>
          </article>

          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="/ritualinrepeat" target="_self">
                <img
                  src="./images/albums/Ritual-in-Repeat.png"
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: Ritual in Repeat(September, 2014)"
                />
              </Link>
              <p className="card-title">Ritual in Repeat (September 2014)</p>
            </article>
          </article>
        </article>

        <article className="row">
          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="/smallsound" target="_self">
                <img
                  src="./images/albums/Small-Sound.png"
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: Small Sound(November, 2013)"
                />
              </Link>
              <p className="card-title">Small Sound (November 2013)</p>
            </article>
          </article>

          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="/youngandold" target="_self">
                <img
                  src="./images/albums/Young-and-Old.png"
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: Young and Old(Feb, 2012)"
                />
              </Link>
              <p className="card-title">Young and Old (February 2012)</p>
            </article>
          </article>
        </article>

        <article className="row">
          <article className="col-sm-6 mt-3 p-3">
            <article className="cardy">
              <Link to="capedory" target="_self">
                <img
                  src="./images/albums/Cape-Dory.png"
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: Cape Dory(January, 2011)"
                />
              </Link>
              <p className="card-title">Cape Dory (January 2011)</p>
            </article>
          </article>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AlbumScreen;
