import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Masthead from "../../components/masthead";
import React from "react";

/**
 * @author
 * @function WeCanDieHappy
 **/

const WeCanDieHappy = (props) => {
  return (
    <div className="background-album">
      <Masthead />
      <Nav />
      <main className="container p-2 my-4">
        <h1>We Can Die Happy</h1>
        <h4>
          <a
            href="https://www.amazon.com/dp/B075MPVQM7/ref=ntt_mus_ep_dpi_3"
            target="_blank"
            rel="noreferrer"
            alt="All Tennis's Music"
          >
            Purchase We Can Die Happy Here!
          </a>
        </h4>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              <a
                className="list-group-item list-group-item-action"
                id="song01-list"
                data-toggle="list"
                href="#song01"
                role="tab"
                aria-controls="song01"
              >
                1. No Exit
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song02-list"
                data-toggle="list"
                href="#song02"
                role="tab"
                aria-controls="song02"
              >
                2. Born to Be Needed
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song03-list"
                data-toggle="list"
                href="#song03"
                role="tab"
                aria-controls="song03"
              >
                3. I Miss That Feeling
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song04-list"
                data-toggle="list"
                href="#song04"
                role="tab"
                aria-controls="song04"
              >
                4. Diamond Rings
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song05-list"
                data-toggle="list"
                href="#song05"
                role="tab"
                aria-controls="song05"
              >
                5. Building God
              </a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="song01"
                role="tabpanel"
                aria-labelledby="song01-list"
              >
                <h3>No Exit</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SrlmOfNXgpY"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I got a little bit left <br />
                    I know that I can give a little bit up
                    <br />
                    I got a little bit left
                    <br />
                    I know that I can give a little bit up
                    <br />
                  </p>
                  <p>
                    It's starting all over again
                    <br />
                    I feel my heartbeat quickening
                    <br />
                    I make a mistake, they all missed it
                    <br />
                    He's prowling around in the night
                    <br />
                    Into his shadow wherever we go
                    <br />
                    Whatever I need to survive
                    <br />
                  </p>
                  <p>
                    We go down, down to the deep void
                    <br />
                    Right back into place, I can breathe again
                    <br />
                    We go down, down to the beat, boy
                    <br />
                    Right back into place
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                  </p>
                  <p>
                    I am ecstatic like a hymn
                    <br />
                    And let the feelings disappear
                    <br />
                    Apocalyptic, my own mistake
                    <br />
                    I'm moving right into the end
                    <br />
                    Under his shadow, wherever we go
                    <br />
                    Our futures again and again
                    <br />
                  </p>
                  <p>
                    We go down, down to the deep void
                    <br />
                    Right back into place, I can breathe again
                    <br />
                    We go down, down to the beat, boy
                    <br />
                    Right back into place
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                  </p>
                  <p>
                    I got a little bit left
                    <br />
                    I know that I can give a little bit up
                    <br />
                    I got a little bit left
                    <br />
                    I know that I can give a little bit up
                    <br />
                  </p>
                  <p>
                    We could die tonight
                    <br />
                    We could die tonight
                    <br />
                    Oh my God, I feel like I'm dying
                    <br />
                    Die tonight
                    <br />
                    We could die tonight
                    <br />
                    Oh my God, I feel like I'm dying
                    <br />
                  </p>
                  <p>
                    From where we are, we're never gonna come back
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                    From where we are, we're never gonna come back
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song02"
                role="tabpanel"
                aria-labelledby="song02-list"
              >
                <h3>Born to Be Needed</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0wIO_10H5wE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Baby, I was born to be needed <br />
                    Baby, I was born to be needed
                    <br />
                  </p>
                  <p>
                    I always resisted convictions and mister, misses
                    <br />
                    But I'd do it, do it, do it again
                    <br />
                    Do it, do it, do it again
                    <br />
                    Immune to biology
                    <br />
                    It's a lonely road to autonomy
                    <br />
                    But I would do it, do it, do it again
                    <br />
                    Do it, do it, do it again
                    <br />
                  </p>
                  <p>
                    Why should I deny myself?
                    <br />
                    Never really cared about my health
                    <br />
                    The simple kind of life
                    <br />
                    Cuts through me like a sharpened knife
                    <br />
                  </p>
                  <p>
                    Baby, I was born to be needed
                    <br />
                    Baby, I was born to be needed
                    <br />
                  </p>
                  <p>
                    Mother heard, might do me good
                    <br />
                    At least that's been the word around the neighborhood
                    <br />
                    We're gonna do it, do it, do it again
                    <br />
                    Do it, do it, do it again
                    <br />
                    I know it's an old refrain
                    <br />
                    But the need hit me like a hurricane
                    <br />
                    I fall into it, do it, do it again
                    <br />
                    Do it, do it, do it again
                    <br />
                  </p>
                  <p>
                    Why should I deny myself?
                    <br />
                    Never really cared about my health
                    <br />
                    The simple kind of life
                    <br />
                    Cuts through me like a sharpened knife
                    <br />
                  </p>
                  <p>
                    Baby, I was born to be needed
                    <br />
                    If my heart can't take it, then maybe
                    <br />
                    I will give right into the feeling
                    <br />
                  </p>
                  <p>
                    Baby, I was born to be needed
                    <br />
                    If my heart can't take it, then maybe
                    <br />
                    I will give right into the feeling
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song03"
                role="tabpanel"
                aria-labelledby="song03-list"
              >
                <h3>I Miss That Feeling</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ON3qRFzTzo4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I can be true to you, even when losing <br />
                    Every little thing I've ever known
                    <br />
                    And all of the love I've ever show
                    <br />
                    Something like pleasure, you'd never believe it
                    <br />
                    Every little need dismantling
                    <br />
                    Recorded by the needle of an EKG
                    <br />
                  </p>
                  <p>
                    I miss that feeling
                    <br />
                    Flicker hot and hovering
                    <br />
                    Like my own discovering
                    <br />
                    Eagerly, tenderly
                    <br />
                    I miss that feeling
                    <br />
                    Flicker spread into an itch
                    <br />
                    Into a burn, into a twitch
                    <br />
                    Slow and even
                    <br />
                  </p>
                  <p>
                    How to explain it or even contain it
                    <br />
                    When I feel that ragged edge descend
                    <br />
                    My heart splits open like a vent
                    <br />
                    Something like pleasure, you'd never believe it
                    <br />
                    Every little thing starts trembling
                    <br />
                    Recorded by the needle of an EKG
                    <br />
                  </p>
                  <p>
                    I miss that feeling
                    <br />
                    Flicker hot and hovering
                    <br />
                    Like my own discovering
                    <br />
                    Eagerly, tenderly
                    <br />
                    I miss that feeling
                    <br />
                    Flicker spread into an itch
                    <br />
                    Into a burn, into a twitch
                    <br />
                    Slow and even
                    <br />
                  </p>
                  <p>
                    I miss that feeling, I miss that feeling
                    <br />
                    I miss that feeling, I miss that feeling
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song04"
                role="tabpanel"
                aria-labelledby="song04-list"
              >
                <h3>Diamond Rings</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/33-Yf0NklO4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I've been looking at your diamond rings <br />
                    And reflecting on the things they tell me
                    <br />
                    That they move too quick to misbehave
                    <br />
                    A dissenter cannot be a slave
                    <br />
                    I'm waiting on you to make my heart move
                    <br />
                    Baby, won't you come into me
                    <br />
                    Come and make my heart move
                    <br />
                  </p>
                  <p>
                    Time to light the lamp and trim the wick
                    <br />
                    I see crimson through a colored slit oh yeah
                    <br />
                    Waiting for the day I change my name
                    <br />
                    I've been told that doesn't mean a thing
                    <br />
                    I'm waiting on you to make my heart move
                    <br />
                    Baby, won't you come into me
                    <br />
                  </p>
                  <p>
                    Really make my heart move
                    <br />
                  </p>
                  <p>
                    Come and make my heart move baby
                    <br />
                    Ooh baby, I'm waiting for the magic
                    <br />
                    Come and make my heart move baby
                    <br />
                    Ooh baby, I'm waiting for the magic
                    <br />
                    Come and make my heart move baby
                    <br />
                    Ooh baby, I'm waiting for the magic
                    <br />
                    Come and make my heart move baby
                    <br />
                    Ooh baby, I'm waiting for the magic
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song05"
                role="tabpanel"
                aria-labelledby="song05-list"
              >
                <h3>Building God</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/DzMclj_IVPc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    You were looking for devotion <br />
                    Made of promises in motion
                    <br />
                    I can change, I can change, I can change
                    <br />
                    Never could find a way to explain
                    <br />
                  </p>
                  <p>
                    We're only building God
                    <br />
                    Until we have the one that we want
                    <br />
                  </p>
                  <p>
                    As I said with hands that quiver
                    <br />
                    Gesturing over our dinner
                    <br />
                    "I can change, I can change, I can change
                    <br />
                    Let me be what you need, it's okay"
                    <br />
                  </p>
                  <p>
                    We're only building God
                    <br />
                    Until we have the one that we want
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WeCanDieHappy;
