import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Masthead from "../../components/masthead";
import React from "react";

/**
 * @author
 * @function Swimmer
 **/

const Swimmer = (props) => {
  return (
    <div className="background-album">
      <Masthead />
      <Nav />
      <main className="container p-2 my-4">
        <h1>Swimmer</h1>
        <h4>
          <a
            href="https://orcd.co/swimmer"
            target="_blank"
            rel="noreferrer"
            alt="All Tennis's Music"
          >
            Purchase Swimmer Here!
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
                1. I'll Haunt You
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song02-list"
                data-toggle="list"
                href="#song02"
                role="tab"
                aria-controls="song02"
              >
                2. Need Your Love
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song03-list"
                data-toggle="list"
                href="#song03"
                role="tab"
                aria-controls="song03"
              >
                3. How to Forgive
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song04-list"
                data-toggle="list"
                href="#song04"
                role="tab"
                aria-controls="song04"
              >
                4. Runner
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song05-list"
                data-toggle="list"
                href="#song05"
                role="tab"
                aria-controls="song05"
              >
                5. Echoes
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song06-list"
                data-toggle="list"
                href="#song06"
                role="tab"
                aria-controls="song06"
              >
                6. Swimmer
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song07-list"
                data-toggle="list"
                href="#song07"
                role="tab"
                aria-controls="song07"
              >
                7. Tender as a Tomb
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song08-list"
                data-toggle="list"
                href="#song08"
                role="tab"
                aria-controls="song08"
              >
                8. Late Night
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song09-list"
                data-toggle="list"
                href="#song09"
                role="tab"
                aria-controls="song09"
              >
                9. Matrimony II
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
                <h3>I'll Haunt You</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SzuzbFdJLss"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    As the sun slips <br />
                    Over my shoulder
                    <br />
                    I can tell I've
                    <br />
                    Been getting older
                    <br />
                    Drawn to you
                    <br />
                    Like the horizon
                    <br />
                    I'm the first one
                    <br />
                    To break the silence
                    <br />
                  </p>
                  <p>
                    I can tell I've been getting
                    <br />
                    I can tell, I<br />
                    I can tell I've been getting
                    <br />
                    I can tell, I<br />
                  </p>
                  <p>
                    As the sun slips
                    <br />
                    Over my shoulder
                    <br />
                    All my need is
                    <br />
                    Pulling me closer
                    <br />
                    Only you
                    <br />
                    Make this rock spinning
                    <br />
                    Off to nowhere
                    <br />
                    Much more appealing
                    <br />
                  </p>
                  <p>
                    On the edge of the earth
                    <br />
                    On the crest of a wave
                    <br />
                    How long can we stay like this?
                    <br />
                    Leaning in for one more kiss
                    <br />
                    I'm holding you so long
                    <br />
                    I will haunt you when I'm gone
                    <br />
                  </p>
                  <p>
                    La la la, la
                    <br />
                    La la la, ooh
                    <br />
                    La ooh, ah ha-ha
                    <br />
                    Ooh hey
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
                <h3>Need Your Love</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rGZVZcMYdmA"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Baby I'm fated but you will be waiting <br />
                    I will have made it
                    <br />
                    But you'll be explaining what you
                    <br />
                    Think the world owes you
                    <br />
                    Looking for someone to carry you into
                    <br />
                    Futures that beckon but need to be followed through
                    <br />
                  </p>
                  <p>
                    I hope you're happy
                    <br />
                    I hope you're please
                    <br />
                    I thought you were a victim
                    <br />
                    But it's clear to me
                    <br />
                  </p>
                  <p>
                    I need your love
                    <br />
                    And I need your touch, like
                    <br />
                    I need a bolt of lightning from the sky above, I've
                    <br />
                  </p>
                  <p>
                    Been thinking about you
                    <br />
                    Thinking about you
                    <br />
                    I can't escape you, oh
                    <br />
                    I'm thinking about you
                    <br />
                    Thinking about you
                    <br />
                    I can't escape you, oh
                    <br />
                  </p>
                  <p>
                    Talking a lot
                    <br />
                    Like a prophet but there's no
                    <br />
                    Wisdom in what you've been saying
                    <br />
                    And I can't seem to
                    <br />
                    Get a read on you
                    <br />
                    Burning your bridges
                    <br />
                    And spreading around those
                    <br />
                    Rumors that sprout from the cracks
                    <br />
                    In the ground, oh no
                    <br />
                  </p>
                  <p>
                    I hope you're happy
                    <br />
                    I hope you're pleased
                    <br />
                    I thought you were a victim
                    <br />
                    But it's clear to me
                    <br />
                  </p>
                  <p>
                    Baby you've got more poison than sugar
                    <br />
                    Baby you've got more poison than sugar
                    <br />
                    Baby you've got more poison than sugar
                    <br />
                    Baby you've got more poison
                  </p>
                  <p>
                    I need your love
                    <br />
                    And I need your touch, like
                    <br />
                    I need a bolt of lightning from the sky above, I've
                    <br />
                  </p>
                  <p>
                    Been thinking about you
                    <br />
                    Thinking about you
                    <br />
                    I can't escape you, oh
                    <br />
                    I'm thinking about you
                    <br />
                    Thinking about you
                    <br />
                    I can't escape you, oh
                    <br />
                    (I can't escape you)
                    <br />
                  </p>
                  <p>
                    Who could blame me?
                    <br />
                    Every time I hear your name I go crazy
                    <br />
                    Ooh, pretty baby
                    <br />
                    Every time I hear your name I go crazy
                    <br />
                  </p>
                  <p>
                    I need your love
                    <br />
                    And I need your touch, like
                    <br />
                    I need a bolt of lightning from the sky above, I've
                    <br />
                  </p>
                  <p>
                    Been thinking about you
                    <br />
                    Thinking about you
                    <br />
                    I can't escape you, oh (I can't escape you)
                    <br />
                    I'm thinking about you
                    <br />
                    Thinking about you
                    <br />
                    I can't escape you, oh
                    <br />
                    (I can't escape you)
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
                <h3>How to Forgive</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9nMYWgkkoxw"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    You take your love so freely <br />
                    Can't you go easy on me
                    <br />
                    Hard to resist, harder to give up like a habit
                    <br />
                    Why do you go losing control
                    <br />
                    What are you looking for? Oh whoa
                    <br />
                    All this noise when I need silence
                    <br />
                    Love shouldn't feel like violence
                    <br />
                    Swallow your pride, open up wide
                    <br />
                    Let the whole world in
                    <br />
                    Empty again punish a friend
                    <br />
                    Make 'em all suffer
                    <br />
                    It's so easy
                    <br />
                    I can't help it
                    <br />
                  </p>
                  <p>
                    How could I disguise the way that I'm feeling
                    <br />
                    I've got my reasons, I could give you a million
                    <br />
                    How could I disguise the way that I'm feeling
                    <br />
                    I've got my reasons, I could give you a million
                    <br />
                  </p>
                  <p>
                    My mind has been divided
                    <br />
                    And I've been questioning myself
                    <br />
                    Can't keep on hesitating
                    <br />
                    It's starting to affect my health
                    <br />
                    Hard to resist, harder to give up my bad habits
                    <br />
                    Why do I go losing control
                    <br />
                    What am I looking for
                    <br />
                    It's so easy
                    <br />
                    I can't help it
                    <br />
                    I can't help it
                    <br />
                    I can't help it
                    <br />
                  </p>
                  <p>
                    Well I know that I can't control
                    <br />
                    But it's so hard to let it go
                    <br />
                    All the worries, they keep coming back
                    <br />
                    And the disappointments from our past
                    <br />
                    I can't help it
                    <br />
                  </p>
                  <p>
                    How could I disguise the way that I'm feeling
                    <br />
                    I've got my reasons, I could give you a million (I can't
                    help it)
                    <br />
                    I'd move on if I could only remember
                    <br />
                    All that it takes is just an act of surrender
                    <br />
                    How could I disguise the way that I'm feeling
                    <br />
                    I've got my reasons, I could give you a million (I can't
                    help it)
                    <br />
                    I'd move on if I could only remember
                    <br />
                    All that it takes is just an act of surrender (I can't help
                    it)
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
                <h3>Runner</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Z6kNQEzQJpA"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Runner <br />
                    I know you're living with a wild hunger
                    <br />
                    Let me make the most of us
                    <br />
                    You know you'll never be a runner
                    <br />
                    And leave me in a cloud of dust
                    <br />
                  </p>
                  <p>
                    Living in the same old sin
                    <br />
                    I feel it blowing in the wind
                    <br />
                    Like manna in the desert, oh
                    <br />
                    Gonna take a miracle
                    <br />
                  </p>
                  <p>
                    Every little bead of sweat
                    <br />
                    Feel it running down my neck
                    <br />
                    When you look at me like that
                    <br />
                    Feeling like we can't go back
                    <br />
                    If I become a pillar of salt
                    <br />
                    I'll know that it was all my fault
                    <br />
                    Every little bead of sweat
                    <br />
                    Every little bead of sweat
                    <br />
                  </p>
                  <p>
                    Runner
                    <br />
                    You're just a bottomless pit of hunger
                    <br />
                    Lead me to the promised land
                    <br />
                    Your manna is only a famine
                    <br />
                    Wandering the desert, oh
                    <br />
                    Gonna take a miracle
                    <br />
                  </p>
                  <p>
                    Every little bead of sweat
                    <br />
                    Feel it running down my neck
                    <br />
                    When you look at me like that
                    <br />
                    Feeling like we can't go back
                    <br />
                    If I become a pillar of salt
                    <br />
                    I'll know that it was all my fault
                    <br />
                    Every little bead of sweat
                    <br />
                    Every little bead of sweat
                    <br />
                  </p>
                  <p>
                    Let me make the most of us
                    <br />
                    You know you'll never be a runner
                    <br />
                    And leave me in a cloud of dust
                    <br />
                    Leveled in a burning heat
                    <br />
                    Red Sea devouring me
                    <br />
                    Flowing over my stoned soul
                    <br />
                    Oh
                    <br />
                  </p>
                  <p>
                    Gonna take a miracle
                    <br />
                    Every little bead of sweat
                    <br />
                    Feel it running down my neck
                    <br />
                    When you look at me like that
                    <br />
                    Feeling like we can't go back
                    <br />
                    If I become a pillar of salt
                    <br />
                    I'll know that it was all my fault
                    <br />
                    Every little bead of sweat
                    <br />
                    Every little bead of sweat
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
                <h3>Echoes</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/iCP96iIt-os"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I'll be the one to be undone <br />
                    I'll go where the sun isn't shining <br />
                    Once I was young
                    <br />
                    Those days are gone
                    <br />
                    Suddenly I'm thirty-three
                    <br />
                    And on a gurney
                    <br />
                    Apologies and obligations
                    <br />
                    All the myriad sensations compounding
                    <br />
                  </p>
                  <p>
                    Echoes in my brain
                    <br />
                    Echoed in refrain
                    <br />
                    Always a replay
                    <br />
                    Like a Grecian tragedy
                    <br />
                  </p>
                  <p>
                    Oh where the time goes
                    <br />
                    Who really knows
                    <br />
                  </p>
                  <p>
                    You said, "Get a doctor"
                    <br />
                    "My wife's going under"
                    <br />
                    She's off where the sun isn't shinning
                    <br />
                    I thought I would argue
                    <br />
                    Or cleverly bargain
                    <br />
                    It looks like I won't be going down stoically
                    <br />
                  </p>
                  <p>
                    Oh to love you and be loved
                    <br />
                    To have the final memory of you compounding
                    <br />
                    Echoes in my brain
                    <br />
                    Echoed in refrain
                    <br />
                    Echoes all the same way, oh
                    <br />
                    Way, oh
                    <br />
                    Way, oh
                    <br />
                    Way, ooh, ooh-ooh
                    <br />
                  </p>
                  <p>
                    Oh where the time goes
                    <br />
                    Who really knows
                    <br />
                    Oh where the time goes
                    <br />
                    Who really knows
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="song06"
                role="tabpanel"
                aria-labelledby="song06-list"
              >
                <h3>Swimmer</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/oa80vXMYpXw"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Some summer you have planned for me <br />
                    Look at all these tourist as they flock to the sea <br />
                    Getting in the water like it's nothing, but it's
                    <br />
                    Not without a consequence
                    <br />
                    I hear it comes quite naturally
                    <br />
                    But that description doesn't fit with me
                    <br />
                    Not going over never going under
                    <br />
                    Not without a consequence
                    <br />
                    The narrows, the river
                    <br />
                    Empty into the sea
                    <br />
                    Some summer you have planned for me
                    <br />
                    Emptied into the sea
                    <br />
                  </p>
                  <p>
                    Some summer you have planned for me
                    <br />
                    Emptied into the sea
                    <br />
                    Such a good man, had a good job
                    <br />
                    I'd take up swimming for the patriarch
                    <br />
                    Now dispersed so casually like
                    <br />
                    Sediment into the sea
                    <br />
                    The swollen moon all flushed with red
                    <br />
                    One eclipse from the bay of the dead
                    <br />
                    It ain't right I'm telling you, it's
                    <br />
                    More than coincidence
                    <br />
                  </p>
                  <p>
                    One stroke at a time
                    <br />
                    On my way
                    <br />
                    Back to land
                    <br />
                    It's better for me
                    <br />
                    With my feet
                    <br />
                    In the sand
                    <br />
                  </p>
                  <p>
                    Some summer you have planned for me
                    <br />
                    Emptied into the sea
                    <br />
                    Some summer you have planned for me
                    <br />
                    Emptied into the sea
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
                <h3>Tender as a Tomb</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MDlDtqTHFp8"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    With my heart in my throat <br />
                    And the sun in my face
                    <br />
                    Lying here in your arms
                    <br />
                    I know this is the place
                    <br />
                    I would never try to explain
                    <br />
                    How it felt when we kissed
                    <br />
                    Courting reason in dreams
                    <br />
                    While my body resists
                    <br />
                  </p>
                  <p>
                    I know my logic can lose you
                    <br />
                    But I think that we can get used to
                    <br />
                  </p>
                  <p>
                    My footsteps over the concrete
                    <br />
                    Blistering in June
                    <br />
                    My heart leaps over the concrete
                    <br />
                    Oh I live for you
                    <br />
                    Each footstep over the concrete
                    <br />
                    Tender as a tomb
                    <br />
                    My heart leaps over the concrete
                    <br />
                    Oh I live for you
                    <br />
                  </p>
                  <p>
                    With my throat in my heart
                    <br />
                    And my face on the sun
                    <br />
                    In your arms, I will lay
                    <br />
                    'Til my dreaming is done
                    <br />
                    Buried under mountains of earth
                    <br />
                    On the crest of a wave
                    <br />
                    Courting reason in love
                    <br />
                    is a terrible waste
                    <br />
                  </p>
                  <p>
                    I know my logic can lose you
                    <br />
                    But I think that we could get used to
                    <br />
                  </p>
                  <p>
                    My footsteps over the concrete
                    <br />
                    blistering in June
                    <br />
                    My heart leaps over the concrete
                    <br />
                    Oh I live for you
                    <br />
                    Each footstep over the concrete
                    <br />
                    Tender as a tomb
                    <br />
                    My heart leaps over the concrete
                    <br />
                    Oh I live for you
                    <br />
                  </p>
                  <p>
                    Oh I live for you
                    <br />
                    Oh I live for you
                    <br />
                    Oh I live for you
                    <br />
                    Oh I live for you
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
                <h3>Late Night</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/2dTLaSnk2ng"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Late night <br />
                    Carried by the wind
                    <br />
                    It took such a long time
                    <br />
                    To make up my own mind
                    <br />
                    Everything is changing
                    <br />
                    But I would not attempt to control you
                    <br />
                  </p>
                  <p>
                    I never could help myself
                    <br />
                    I waste my time
                    <br />
                    It's taking a toll on my health
                    <br />
                    I waste my own time
                    <br />
                    Like Mary Magdalene I'm on my knees again
                    <br />
                    But if you see me as a saint
                    <br />
                    You'd be mistaken
                    <br />
                  </p>
                  <p>
                    Late night turning into morning blue
                    <br />
                    It took such a long time
                    <br />
                    To make up my own mind about you
                    <br />
                    Now the sun hangs heavy
                    <br />
                    And I can't even lift my eyes
                    <br />
                    To where it sits indifferently
                    <br />
                    Unmoved, mover of the sky
                    <br />
                  </p>
                  <p>
                    I never could help myself
                    <br />
                    I waste my time
                    <br />
                    It's taking a toll on my health
                    <br />
                    I waste my own time
                    <br />
                    Like Mary Magdalene I'm on my knees again
                    <br />
                    But if you see me as a saint
                    <br />
                    You'd be mistaken
                    <br />
                  </p>
                  <p>
                    I am the master of my ship
                    <br />
                    My ship the master of the sea
                    <br />
                    Through a rhetorical distinction
                    <br />
                    I think I'm finally
                    <br />
                    Feeling free
                    <br />
                    For the first time
                    <br />
                    For the first time
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
                <h3>Matrimony II</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Hvg8aUe8gp0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I only have certainty <br />
                    When you hold my hand
                    <br />
                    There's so much I don't understand
                    <br />
                  </p>
                  <p>
                    Baby we've been orbiting
                    <br />
                    Each other helplessly
                    <br />
                    I guess that I blacked out
                    <br />
                    But remembered to move my mouth
                    <br />
                    So much for my vows
                    <br />
                    More concerned with here and know
                    <br />
                  </p>
                  <p>
                    No one knows of love that's slow
                    <br />
                    Held like the longest breath or
                    <br />
                    The gentle pull of gravity
                    <br />
                    That's being unto death
                    <br />
                    I can't go on living with a spark
                    <br />
                    That's only flickering
                    <br />
                    I only want that tenderness
                    <br />
                    With every moment left
                    <br />
                  </p>
                  <p>
                    I could never find something better
                    <br />
                    I even changed my name
                    <br />
                    By my side in every kind of weather
                    <br />
                    I'll never be the same
                    <br />
                    I could never find something better
                    <br />
                    I even changed my name
                    <br />
                    By my side in every kind of weather
                    <br />
                    I'll never be the same
                    <br />
                  </p>
                  <p>
                    Come closer you say
                    <br />
                    Black cats in the neighborhood
                    <br />
                    Aren't necessarily a sign of something
                    <br />
                    You know me so well
                    <br />
                    There goes the neighborhood
                    <br />
                    Let it all go burning down around us
                    <br />
                  </p>
                  <p>
                    No one knows of love that's slow
                    <br />
                    Held like the longest breath or
                    <br />
                    The gentle pull of gravity
                    <br />
                    That's being unto death
                    <br />
                    I can't go on living with a spark
                    <br />
                    That's only flickering
                    <br />
                    I only want that tenderness
                    <br />
                    With every moment left
                    <br />
                  </p>
                  <p>
                    To give, ohh
                    <br />
                    To give, ohh
                    <br />
                  </p>
                  <p>
                    I could never find something better
                    <br />
                    I even changed my name
                    <br />
                    By my side in every kind of weather
                    <br />
                    I'll never be the same
                    <br />
                    I could never find something better
                    <br />
                    I even changed my name
                    <br />
                    By my side in every kind of weather
                    <br />
                    I'll never be the same
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

export default Swimmer;
