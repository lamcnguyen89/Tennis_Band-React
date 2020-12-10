import React from "react";
import {Link} from "react-router-dom";
import BodyClassName from 'react-body-classname';
import CapeDory from "../images/albums/Cape-Dory.png";
import RitualInRepeat from "../images/albums/Ritual-in-Repeat.png";
import SmallSound from "../images/albums/Small-Sound.png";
import Swimmer from "../images/albums/Swimmer.png";
import WeCanDieHappy from "../images/albums/We-Can-Die-Happy.png";
import YoungAndOld from "../images/albums/Young-and-Old.png";
import YoursConditionally from "../images/albums/Yours-Conditionally.png"

/**
 * @author
 * @function AlbumScreen
 **/

const AlbumScreen = (props) => {
  return (
    <BodyClassName className="background-music">
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
                  src={Swimmer}
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
                  src={WeCanDieHappy}
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
                  src={YoursConditionally}
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
                  src={RitualInRepeat}
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
                  src={SmallSound}
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
                  src={YoungAndOld}
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
                  src={CapeDory}
                  className="card-img-top img-fluid rounded"
                  alt="Tennis: Cape Dory(January, 2011)"
                />
              </Link>
              <p className="card-title">Cape Dory (January 2011)</p>
            </article>
          </article>
        </article>
      </main>
    </BodyClassName>
  );
};

export default AlbumScreen;
