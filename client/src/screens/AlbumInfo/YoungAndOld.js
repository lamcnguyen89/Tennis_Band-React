import React from "react";
import BodyClassName from 'react-body-classname';

/**
 * @author
 * @function YoungAndOld
 **/

const YoungAndOld = (props) => {
  return (
    <BodyClassName className="background-album">
      <main className="container p-2 my-4">
        <h1>Young and Old</h1>
        <h4>
          <a
            href="https://www.amazon.com/dp/B006UFHGWY/ref=ntt_mus_ep_dpi_4"
            target="_blank"
            rel="noreferrer"
            alt="All Tennis's Music"
          >
            Purchase Young and Old Here!
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
                1. It All Feels The Same
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song02-list"
                data-toggle="list"
                href="#song02"
                role="tab"
                aria-controls="song02"
              >
                2. Origins
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song03-list"
                data-toggle="list"
                href="#song03"
                role="tab"
                aria-controls="song03"
              >
                3. My Better Self
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song04-list"
                data-toggle="list"
                href="#song04"
                role="tab"
                aria-controls="song04"
              >
                4. Traveling
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song05-list"
                data-toggle="list"
                href="#song05"
                role="tab"
                aria-controls="song05"
              >
                5. Petition
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song06-list"
                data-toggle="list"
                href="#song06"
                role="tab"
                aria-controls="song06"
              >
                6. Robin
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song07-list"
                data-toggle="list"
                href="#song07"
                role="tab"
                aria-controls="song07"
              >
                7. High Road
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song08-list"
                data-toggle="list"
                href="#song08"
                role="tab"
                aria-controls="song08"
              >
                8. Dreaming
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song09-list"
                data-toggle="list"
                href="#song09"
                role="tab"
                aria-controls="song09"
              >
                9. Never to Part
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="song10-list"
                data-toggle="list"
                href="#song10"
                role="tab"
                aria-controls="song10"
              >
                10. Take Me To Heaven
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
                <h3>It All Feels The Same</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gxgxto7teXE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Took a train to, took a train to get to you <br />
                    Finally got there and I couldn't find you anywhere
                    <br />
                    We could be good but we don't live the way that we should
                    <br />
                    Constantly told we're imperfect and could not be good
                    <br />
                  </p>
                  <p>
                    Took a train to, took a train to get to you
                    <br />
                    Finally got there and I couldn't find you anywhere
                    <br />
                    We could be good but we don't live the way that we should
                    <br />
                    Constantly told we're imperfect and could not be good
                    <br />
                    Tired of waiting around for you to intervene
                    <br />
                    Tired of wishing that you even knew what I mean
                    <br />
                  </p>
                  <p>
                    When I say your name I look for a change
                    <br />
                    But everywhere I go it all feels the same
                    <br />
                    We could be good but we don't live the way that we should
                    <br />
                    Constantly told we're imperfect and could not be good
                    <br />
                    Tired of waiting around for you to intervene
                    <br />
                    Tired of wishing that you even knew what I mean
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
                <h3>Origins</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/a29g5ygQQak"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Sensitive heart, you're doomed from the start <br />
                    Meant to play the penitent part
                    <br />
                    Inquisitive mind, you're destined to find
                    <br />
                    Tempted fate and knowledge divine
                    <br />
                  </p>
                  <p>
                    View in there a pitied pair
                    <br />
                    Denoted by a scene unfair
                    <br />
                    Will you make my children bear
                    <br />
                    The consequences everywhere?
                    <br />
                  </p>
                  <p>
                    Is it so hard to forgive
                    <br />
                    The way that we have been made to live?
                    <br />
                    How much is required to set things right?
                    <br />
                    Have you confused your power with mine?
                    <br />
                    Oh whoa oh
                    <br />
                  </p>
                  <p>
                    View in there a pitied pair
                    <br />
                    Denoted by a scene unfair
                    <br />
                    Will you make my children bear
                    <br />
                    The consequences everywhere?
                    <br />
                  </p>
                  <p>
                    Imminent you seem to be
                    <br />
                    A picture of fragility
                    <br />
                    What is it that you think of me?
                    <br />
                    Is it a woman that you see?
                    <br />
                  </p>
                  <p>
                    Is it so hard to forgive
                    <br />
                    The way that we have been made to live?
                    <br />
                    How much is required to set things right?
                    <br />
                    Have you confused your power with mine?
                    <br />
                    Oh whoa oh
                    <br />
                  </p>
                  <p>
                    Is it so hard to forgive
                    <br />
                    The way that we have been made to live?
                    <br />
                    How much is required to set things right?
                    <br />
                    Have you confused your power with mine?
                    <br />
                  </p>
                  <p>
                    Oh whoa oh
                    <br />
                    Oh oh ooh oh oh ooh oh oh
                    <br />
                    Oh oh ooh oh oh ooh oh oh
                    <br />
                    Oh oh ooh oh oh ooh oh oh
                    <br />
                    Oh oh ooh oh oh ooh oh oh
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
                <h3>My Better Self</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gY5kKn24qvs"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    My better self still knows <br />
                    That meaning comes and goes <br />
                    What is it made?
                    <br />
                    I do not know <br />
                    But meaning comes and it goes
                    <br />
                  </p>
                  <p>
                    Each and every portent
                    <br />
                    Of bitter substance spent
                    <br />
                    Despite the effort I have planned
                    <br />
                    You seem to lose what I've meant
                    <br />
                  </p>
                  <p>
                    If I don't use words
                    <br />
                    Then each sound goes unheard
                    <br />
                    Utterly senseless without nouns and verbs
                    <br />
                    Symbols suggest they are fit to possess
                    <br />
                    A purposely function
                    <br />
                    That cannot be met
                    <br />
                  </p>
                  <p>
                    Those who created know
                    <br />
                    Air is in man and blow
                    <br />
                    Only the value given shows
                    <br />
                    That meaning comes and goes
                    <br />
                  </p>
                  <p>
                    My better self still knows
                    <br />
                  </p>
                  <p>
                    That meaning comes and goes
                    <br />
                    What is it made?
                    <br />
                    I do not know
                    <br />
                    But meaning comes and it goes
                    <br />
                  </p>
                  <p>
                    If I don't use words
                    <br />
                    Then each sound goes unheard
                    <br />
                    Utterly senseless without nouns and verbs
                    <br />
                    But symbols suggest they are fit to possess
                    <br />
                    A purposely function
                    <br />
                    That cannot be met
                    <br />
                  </p>
                  <p>
                    If I don't use words
                    <br />
                    Then each sound goes unheard
                    <br />
                    Utterly senseless without nouns and verbs
                    <br />
                    But symbols suggest they are fit to possess
                    <br />
                    A purposely function
                    <br />
                    That cannot be met
                    <br />
                  </p>
                  <p>
                    My better self still knows
                    <br />
                    That meaning comes and goes
                    <br />
                    What is it made?
                    <br />
                    I do not know
                    <br />
                    But meaning comes and goes
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
                <h3>Traveling</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dy4Y4Synrx8"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Now, leave your hand in mine <br />
                    The heat strikes me as divine
                    <br />
                    Seated here by my side
                    <br />
                    The day blurs into the night
                    <br />
                    How is it you seem to know what I tried not to show?
                    <br />
                  </p>
                  <p>
                    This must be rare
                    <br />
                    Cause nothing else could compare
                    <br />
                    Not that I'm aware of
                    <br />
                    This must be rare
                    <br />
                    Cause nothing else could compare
                    <br />
                    Not that I'm aware of
                    <br />
                  </p>
                  <p>
                    Seems like we've travelled for days
                    <br />
                    Though we vanish away
                    <br />
                  </p>
                  <p>
                    Tell me where you need to go
                    <br />
                    Darling, can we take it slow?
                    <br />
                    Let's not stop
                    <br />
                    Please, let's go
                    <br />
                    Say you're mine
                    <br />
                    Say it slow
                    <br />
                    To be sure we know
                    <br />
                  </p>
                  <p>
                    Across the Saccharine Plain
                    <br />
                    Cracked and devoid of rain
                    <br />
                    I think of life without pain
                    <br />
                    To hide my hope from this scissors' strain
                    <br />
                    How is it you seem to know what I tried not to show
                    <br />
                  </p>
                  <p>
                    This must be rare
                    <br />
                    Cause nothing else could compare
                    <br />
                    Not that I'm aware of
                    <br />
                    This must be rare
                    <br />
                    Cause nothing else could compare
                    <br />
                    Not that I'm aware of
                    <br />
                  </p>
                  <p>
                    Seems like we've travelled for days
                    <br />
                    Though we vanish away
                    <br />
                  </p>
                  <p>
                    Tell me where you need to go
                    <br />
                    Darling, can we take it slow?
                    <br />
                    Let's not stop
                    <br />
                    Please, let's go
                    <br />
                    Say you're mine
                    <br />
                    Say it slow
                    <br />
                    To be sure we know
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
                <h3>Petition</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/KmZzlRvanUE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I'd prefer to think of him as a man of many means <br />
                    Of powers extreme, exposed to the extreme
                    <br />
                    Nature's so to demand, he may never change his mind
                    <br />
                    The only possible excuse for pretending to be blind
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    I can't 'member why are these more to sound mysterious
                    <br />
                    His anger extreme, exposed to the extreme
                    <br />
                    Has he a hidden past?
                    <br />
                    And memories that don't go back
                    <br />
                    And have to remember what I'm supposed to like
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    For those who've never had
                    <br />
                    You keep coming back
                    <br />
                    You take, take, take away
                    <br />
                    'Til the very last
                    <br />
                  </p>
                  <p>
                    For those who've never had
                    <br />
                    You keep coming back
                    <br />
                    Take, take, take away
                    <br />
                    'Til the very last
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
                    <br />
                  </p>
                  <p>
                    Petition for a life unknown
                    <br />
                    To all my friends, the censor's shown, no, oh, oh
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
                <h3>Robin</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qw5WVQvqgGE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Why did you ever leave today? <br />
                    No you've been miles away
                    <br />
                    You took chance leaving after stands
                    <br />
                    You can blame it your circumstances
                    <br />
                    You set up on a simple life
                    <br />
                    Meant to be home on be forgot
                    <br />
                  </p>
                  <p>
                    Now you see that
                    <br />
                    All is not as it seemed
                    <br />
                    You fade, you can't believe
                    <br />
                  </p>
                  <p>
                    Then I glimpse you as you lied in here
                    <br />
                    Cautiously begun moving near
                    <br />
                    And I can't be sure if you can hear me
                    <br />
                    Now you can rest your tiny feet
                    <br />
                    Took a way and rest your tired wings
                    <br />
                  </p>
                  <p>
                    No you dream, oh perfectly dreams
                    <br />
                    You love me to believe
                    <br />
                  </p>
                  <p>
                    Seeking shelter from the wind
                    <br />
                    It blows with strength that has no end
                    <br />
                    So small you seem within my hand
                    <br />
                    You gather strength to leave again
                    <br />
                  </p>
                  <p>
                    The storm is strong
                    <br />
                    But you carried on
                    <br />
                    And now it's gone
                    <br />
                  </p>
                  <p>
                    Seeking shelter from the wind
                    <br />
                    It blows with strength that has no end
                    <br />
                    So small you seem within my hand
                    <br />
                    You gather strength to leave again
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
                <h3>High Road</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qayQZd4U1Hw"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    At two fish creek they come to meet <br />
                    Weathered and edged by the summer heat
                    <br />
                    The sun is always in their eyes
                    <br />
                    They hold their glasses like a prize
                    <br />
                  </p>
                  <p>
                    On a clouded fair and gin they dine
                    <br />
                    They're always losing track of time
                    <br />
                    A swampy mangrove paradise
                    <br />
                    They import everything that's nice
                    <br />
                  </p>
                  <p>
                    Comfort is a word rarely heard
                    <br />
                    Wages are transient they look
                    <br />
                    For opportunity to grow
                    <br />
                    The better times they never show
                    <br />
                  </p>
                  <p>
                    By now their dreams have all been dreamt
                    <br />
                    All of their money has been spent
                    <br />
                    The crashing surf upon the ground
                    <br />
                    And no one ever hears a sound
                    <br />
                  </p>
                  <p>
                    A life of middling at best
                    <br />
                    Put that pro-touch-up to a rest
                    <br />
                    Was it a choice they do not know
                    <br />
                    The better times they never show
                    <br />
                  </p>
                  <p>
                    Paradise is all around
                    <br />
                    But happiness is never found
                    <br />
                    Paradise is all around
                    <br />
                    But happiness is never found
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
                <h3>Dreaming</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/F3O3AXQCcMw"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    I've searched high and low <br />
                    I've looked deep inside
                    <br />
                    But how can I know
                    <br />
                    For such a long time
                    <br />
                    I've hoped for a sign
                    <br />
                    That one day I'd find
                    <br />
                    We've been and found
                    <br />
                    Either inside or out
                    <br />
                    I have to take time
                    <br />
                    Your meaning contained
                    <br />
                    Your value displayed
                    <br />
                    By speaking your name
                    <br />
                  </p>
                  <p>
                    You revealed yourself in a dream
                    <br />
                    Then you told me how to believe
                    <br />
                  </p>
                  <p>
                    Dreaming, I'm dreaming
                    <br />
                    I can still believe in
                    <br />
                    I'm dreaming I can still believe in you
                    <br />
                  </p>
                  <p>
                    I've searched high and low
                    <br />
                    I've looked deep inside
                    <br />
                    But how can I know
                    <br />
                    For such a long time
                    <br />
                    I've hoped for a sign
                    <br />
                    That one day I'd find
                    <br />
                    We've been and found
                    <br />
                    Either inside or out
                    <br />
                    I have to take time
                    <br />
                    Your meaning contained
                    <br />
                    Your value displayed
                    <br />
                    By speaking your name
                    <br />
                  </p>
                  <p>
                    You revealed yourself in a dream
                    <br />
                    Then you told me how to believe
                    <br />
                  </p>
                  <p>
                    Dreaming, I'm dreaming
                    <br />
                    I can still believe in
                    <br />
                    I'm dreaming I can still believe in you
                    <br />
                    Dreaming, I'm dreaming
                    <br />
                    I can still believe in
                    <br />
                    I'm dreaming I can still believe in you
                    <br />
                    I'm Dreaming, I'm dreaming
                    <br />
                    I can still believe in
                    <br />
                    I'm dreaming I can still believe in you
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
                <h3>Never to Part</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/szcFltppMh0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    Little virgin clean and bright <br />
                    Milk, white skin hidden from night
                    <br />
                    Unblemished are your private parts
                    <br />
                    Desire can't oppress your light
                    <br />
                    Puerile movements that you make
                    <br />
                    Will not make men hesitate
                    <br />
                    Lest your charms are all revealed
                    <br />
                    Then your power you may wield
                    <br />
                  </p>
                  <p>
                    Do not furrow that perfect brow
                    <br />
                    Chaste lips never to part till now
                    <br />
                    Do not furrow that perfect brow
                    <br />
                    Chaste lips never to part till now
                    <br />
                  </p>
                  <p>
                    Child, all of these things I've done for you
                    <br />
                    Child, we are only thinking of you
                    <br />
                  </p>
                  <p>
                    Little virgin sweetly made
                    <br />
                    Knows not of the plans we've laid
                    <br />
                    Guard the fragile flickering light
                    <br />
                    To extinguish as we like
                    <br />
                    Free from every wicked thing
                    <br />
                    You'll receive a diamond ring
                    <br />
                    Prepubescent wedding day
                    <br />
                    Thereupon you'll lay your head
                    <br />
                  </p>
                  <p>
                    Do not furrow that perfect brow
                    <br />
                    Chaste lips never to part till now
                    <br />
                    Do not furrow that perfect brow
                    <br />
                    Chaste lips never to part till now
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
                <h3>Take Me To Heaven</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item rounded"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/glxYcP78xzI"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="container mt-3">
                  <p>
                    There's nothing left for me <br />
                    There's nothing there for me
                    <br />
                    So far as I can see
                    <br />
                    There's nothing left for me
                    <br />
                  </p>
                  <p>
                    As a child I was told
                    <br />
                    We all possess a soul
                    <br />
                    And one day when I'm old
                    <br />
                    I re-shot, been more bold
                    <br />
                  </p>
                  <p>
                    Oh, my mistakes, imperfections, they make me
                    <br />
                    Long for a place where they can't overtake me
                    <br />
                  </p>
                  <p>
                    There's nothing there for me
                    <br />
                    There's nothing there for me
                    <br />
                    So far as I can see
                    <br />
                    There's nothing there for me
                    <br />
                  </p>
                  <p>
                    But if you're only passing through
                    <br />
                    Then please don't forget when you do
                    <br />
                    But if you're only passing through
                    <br />
                    Then take me to heaven with you
                    <br />
                  </p>
                  <p>
                    I'd never believe in what I can't see
                    <br />
                    Oh, if all you say is true
                    <br />
                    Then take me to heaven with you
                    <br />
                  </p>
                  <p>
                    When I pass away
                    <br />
                    This will fade away
                    <br />
                    What promises I make
                    <br />
                    I know I may not stay
                    <br />
                  </p>
                  <p>
                    When I pass away
                    <br />
                    All this will fade
                    <br />
                    My promise I made
                    <br />
                    I know I may not stay
                    <br />
                  </p>
                  <p>
                    There's nothing there for me
                    <br />
                    There's nothing there for me
                    <br />
                    So far as I can see
                    <br />
                    There's nothing there for me
                    <br />
                  </p>
                  <p>
                    But if you're only passing through
                    <br />
                    Then please don't forget when you do
                    <br />
                    But if you're only passing through
                    <br />
                    Then please don't forget when you do
                    <br />
                    If you're only passing through
                    <br />
                    Then take me to heaven with you
                    <br />
                    If you're only passing through
                    <br />
                    Then take me to heaven with you
                    <br />
                  </p>
                  <p>
                    I'd never believe in what I can't see
                    <br />
                    Oh, if all you say is true
                    <br />
                    Then take me to heaven with you
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BodyClassName>
  );
};

export default YoungAndOld;
