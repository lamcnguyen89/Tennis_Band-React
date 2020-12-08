import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Masthead from "../../components/masthead";
import React from "react";

/**
 * @author
 * @function CapeDory
 **/

const CapeDory = (props) => {
  return (
    <div className="background-album">
      <Masthead />
      <Nav />
      <main classNameName="container p-2 my-4">
        <h1>Cape Dory </h1>
        <h4>
          <a
            href="https://www.amazon.com/Cape-Dory-Tennis/dp/B004E9YBX0"
            target="_blank"
            alt="All Tennis's Music"
            rel="noreferrer"
          >
            Purchase Cape Dory Here!
          </a>
        </h4>
        <hr />
        <div classNameName="row">
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
                1. Take Me Somewhere
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song02-list"
                data-toggle="list"
                href="#song02"
                role="tab"
                aria-controls="song02"
              >
                2. Long Boat Pass
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song03-list"
                data-toggle="list"
                href="#song03"
                role="tab"
                aria-controls="song03"
              >
                3. Cape Dory
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song04-list"
                data-toggle="list"
                href="#song04"
                role="tab"
                aria-controls="song04"
              >
                4. Marathon
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song05-list"
                data-toggle="list"
                href="#song05"
                role="tab"
                aria-controls="song05"
              >
                5. Bimini Bay
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song06-list"
                data-toggle="list"
                href="#song06"
                role="tab"
                aria-controls="song06"
              >
                6. South Carolina
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song07-list"
                data-toggle="list"
                href="#song07"
                role="tab"
                aria-controls="song07"
              >
                7. Pigeon
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song08-list"
                data-toggle="list"
                href="#song08"
                role="tab"
                aria-controls="song08"
              >
                8. Seafarer
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song09-list"
                data-toggle="list"
                href="#song09"
                role="tab"
                aria-controls="song09"
              >
                9. Baltimore
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song10-list"
                data-toggle="list"
                href="#song10"
                role="tab"
                aria-controls="song10"
              >
                10. Waterbirds
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
                <h3>Take Me Somewhere</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P4Qed0nEtpk"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I get the tiller, you get the line <br />
                    Crystalline water with manta ray shine <br />
                    Annapolis ships heel and dip
                    <br />
                    Swift Rangers'lines clean and sleek
                    <br />
                  </p>
                  <p>
                    Does the mainsheet remind you of me?
                    <br />
                    Do nautical things make you miss the sea?
                    <br />
                    Make fast the lines, please don't waste anytime
                    <br />
                    Oh, I feel the wind blowing
                    <br />
                  </p>
                  <p>
                    Sultry in the summer heat
                    <br />
                    I know with you we can't be beat
                    <br />
                    Take me somewhere
                    <br />
                    Take me somewhere
                    <br />
                    Take me somewhere
                    <br />
                  </p>
                  <p>
                    Why don't you take me somewhere?
                    <br />
                  </p>
                  <p>
                    Sittin'in the sand
                    <br />
                    Waitin'for you to return to land
                    <br />
                    Sittin'in the sand
                    <br />
                    Waitin'for you to return to land
                    <br />
                  </p>
                  <p>
                    Oh, take me somewhere
                    <br />
                    Take me somewhere
                    <br />
                    Take me somewhere
                    <br />
                    Why don't you take me somewhere?
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
                <h3>Long Boat Pass</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ds-sBeWgupw"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Darling you know I love you, I love you,
                    <br />
                    Oh, oh, o-oh, oh!
                    <br />
                    I'll stay if you, ask me to, ask me to,
                    <br />
                    Oh, oh, o-oh, oh!
                    <br />
                    We spent the night out in your long boat dream
                    <br />
                    It drains the confidence out of me,
                    <br />
                    Those little shore boats to expect,
                    <br />
                    Oh sailor, you had better be good.
                    <br />
                  </p>
                  <p>
                    Darling you know I love you, I love you.
                    <br />
                    Oh, oh, o-oh, oh!
                    <br />
                    I'll stay if you, ask me to, ask me to!
                    <br />
                    Oh, oh, oh, oh!
                    <br />
                    Standing there lookin' so sweet,
                    <br />
                    Tell me that, baby, I'm better than
                    <br />
                    Oh, oh, oh, oh, <br />
                  </p>
                  <p>
                    Those steamboats makin' the only sounds
                    <br />
                    Reminding me that I'm not aground
                    <br />
                    You know that I will never forget
                    <br />
                    Those days we spend and could have
                    <br />
                    Long boat pass, long boat pass,
                    <br />
                    Let me through is all I ask.
                    <br />
                    Long boat pass, long boat pass,
                    <br />
                    Let me through is all I ask.
                    <br />
                    Please let me through we must drift off to sea
                    <br />
                    Oh, oh, oh
                    <br />
                    We must make do though the waves crash my
                    <br />
                    Oh, oh, oh, oh!
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
                <h3>Cape Dory</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ZEGoc1zycLY"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Take me out baby, I wanna go slow tonight!
                    <br />
                    I could see the ocean floor, in the pale moon light.
                    <br />
                    Oh, let's explore the shelter 'til the morning rises,
                    <br />
                    And we won't turn back to the shores out of sight, oh!
                    <br />
                  </p>
                  <p>
                    We can, through sand, holding hands
                    <br />
                    And
                    <br />
                    We could
                    <br />
                    We could listen to the sound of the ocean says
                    <br />
                    Oh, oh, oh, oh, oh!
                    <br />
                  </p>
                  <p>
                    Do you wanna go in a ?<br />
                    I know a place by the sea, we could
                    <br />
                    Well I know a lace by the sea,
                    <br />
                    We could
                    <br />
                    Oh, sha la la, sha la la la!
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
                <h3>Marathon</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GhIT8sUAAZE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Coconut grove
                    <br />
                    Is a very small cove
                    <br />
                    Separated from the sea
                    <br />
                    By a shifting shoal
                    <br />
                    We didn't realize that
                    <br />
                    We had arrived
                    <br />
                    At high tide, high tide
                    <br />
                    Barely made it out alive
                    <br />
                  </p>
                  <p>
                    Red over white
                    <br />
                    Fishermen working at night
                    <br />
                    Not even once
                    <br />
                    Did we see a light
                    <br />
                    We didn't realize
                    <br />
                    The forecast had been revised
                    <br />
                    By moonless skies and
                    <br />
                    Shifty wind that gusts and dies
                    <br />
                  </p>
                  <p>
                    On the sand our keel is heaving
                    <br />
                    But tonight we've got to be leaving
                    <br />
                    Travel through the day and into the evening
                    <br />
                  </p>
                  <p>
                    Marathon how long we've been gone
                    <br />
                    And still not yet set foot upon you
                    <br />
                  </p>
                  <p>
                    Your low lying shore opens welcomingly
                    <br />
                    To one who's spent the night at sea
                    <br />
                    Adrift in the shallows, a modest repose
                    <br />
                    Adorn with coral, your bright colors show
                    <br />
                    Ushered in through a bridge that is never closed
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
                <h3>Bimini Bay</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6IqTPcjrGYk"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    And he stood in tassel and tears,
                    <br />
                    ? such maker and just to leave <br />
                    And ask if I'm right, we're making good time <br />
                    We'll make when fall by time <br />
                    The words you read you keep alone <br />
                  </p>
                  <p>
                    So ? and evade, oh, oh, oh <br />
                    So we wait to Bimini Bay, oh, oh, oh <br />
                    So we wait to Bimini Bay, oh, oh, oh <br />
                    We've been gone for so very long and we forgot from where we
                    are from <br />
                    We forgot for so very long and we forgotten where we are
                    from, oh, oh, oh. <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song06"
                role="tabpanel"
                aria-labelledby="song06-list"
              >
                <h3>South Carolina</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pe3554bAUWk"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    South Carolina where the Cypress grow <br />
                    White pine and hemlock all seem to know <br />
                    The tidal sweep through your southern marsh
                    <br />
                    The squall last night seemed a little harsh
                    <br />
                    Your little island lees give us shelter from the seas
                    <br />
                    Oh no, what was that, a no-ce-um attack
                    <br />
                    The sun is sinking awfully fast
                    <br />
                    Can we make it last
                    <br />
                  </p>
                  <p>
                    We can't move on by looking back
                    <br />
                    Can we make it last
                    <br />
                    South Carolina really makes a man
                    <br />
                    If The South can't do it then no one can
                    <br />
                    The morning breeze is my favorite part
                    <br />
                    Carry South Carolina deep in my heart
                    <br />
                    We'll make a family in the quiet country
                    <br />
                    You and me, in simplicity
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song07"
                role="tabpanel"
                aria-labelledby="song07-list"
              >
                <h3>Pigeon</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/2hXzXei487E"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Been reaching for my baby <br />
                    Close-hearted with my darling I'll hold the sheet tight,
                    keeping watch through the night <br />
                    I will be there, I promise to take good care of you
                    <br />
                  </p>
                  <p>
                    Been reaching for my baby
                    <br />
                    Close-hearted with my darling
                    <br />
                    I'll be holding you tight, let you sleep through the night
                    <br />
                    Let the wind blow; we will be safe, I know
                    <br />
                    I will be there, I promise to take care of you
                    <br />
                    I will be there, I promise to take care of you
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song08"
                role="tabpanel"
                aria-labelledby="song08-list"
              >
                <h3>Seafarer</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0yMQvtvhQhc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Bap-ba-bap-pab-ba <br />
                    Bap-ba-bap-pab-ba
                    <br />
                    Bap-ba-bap-pab-ba
                    <br />
                    Bap-ba-bap-pab-ba
                    <br />
                    Oo-whoa-oh
                    <br />
                  </p>
                  <p>
                    It was a summer day,
                    <br />
                    When you took my cares away
                    <br />
                    When you whispered to me,
                    <br />
                    And it was so sweet,
                    <br />
                    She can blow us off track, so marry me,
                    <br />
                    You found the weathered boat,
                    <br />
                    Ocean baby you would know,
                    <br />
                    When you feel the bow cutting through the waves
                    <br />
                    No other motion can pass the day
                    <br />
                  </p>
                  <p>
                    Seafarer look what you've done
                    <br />
                    Got me chasing after the sun
                    <br />
                    I've left my home and friends behind
                    <br />
                    You've driven me clean out of my mind
                    <br />
                  </p>
                  <p>
                    Don't tell me when you've set sail
                    <br />
                    You'd face a number if you could scale
                    <br />
                    I know I never learned to set the oar
                    <br />
                    Nothing left for me back on shore
                    <br />
                  </p>
                  <p>
                    Will you call on me when you're living on the sea?
                    <br />
                    Will you call on me when your living on the
                    <br />
                    Oh-oo-oo-oh-oo-oo-ohoh-o
                    <br />
                    Oh-oo-oo-oh-oo-oo-ohoh-o
                    <br />
                  </p>
                  <p>
                    Seafarer I must love you,
                    <br />
                    Why else would I follow you
                    <br />
                    I've left my home and friends behind
                    <br />
                    You've driven me clean out of my mind
                    <br />
                  </p>
                  <p>
                    Seafarer, oh-o-oh, you and I belong together
                    <br />
                    Seafarer, oh-o-oh, you and I belong oh-o-o-oh-whoa
                    <br />
                    Seafarer, oh-o-oh, you and I belong together
                    <br />
                    Seafarer, oh-o-oh, you and I belong oh-o-o-oh-whoa
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song09"
                role="tabpanel"
                aria-labelledby="song09-list"
              >
                <h3>Baltimore</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/svAyng9VHEc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    We can take it; we can make it <br />
                    These streets can't be tougher than sea
                    <br />
                    Baltimore your potholes bore me
                    <br />
                    Can't you see you're acting poorly
                    <br />
                    Can we get a job, can we get a job
                    <br />
                    We need off this dock, is that asking a lot
                    <br />
                    Now I've seen it all before
                    <br />
                    When no one's opened up their door
                    <br />
                    How is one meant to survive when one is over-qualified
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song10"
                role="tabpanel"
                aria-labelledby="song10-list"
              >
                <h3>Waterbirds</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/RvJTV-wPS7o"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Still dreaming of the thicketed field <br />
                    Salty marsh fed by the tidal stream <br />
                    Look down the flush
                    <br />
                    Sleeping deep in the brush
                    <br />
                    The night brings the hush
                    <br />
                    I can hear the current
                    <br />
                    Hidden by the knees of the cypress trees
                    <br />
                    The insects chirping underneath the leaves
                    <br />
                    When you kiss me, you really kiss me
                    <br />
                    Tell me how can you resist me
                    <br />
                    Did we ever reveal?
                    <br />
                    This is all that we need
                    <br />
                    Did we ever reveal?
                    <br />
                    This is all that we need
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

export default CapeDory;
