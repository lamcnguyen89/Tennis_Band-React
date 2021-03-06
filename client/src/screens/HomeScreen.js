import React, { useState, useEffect } from "react";
import BodyClassName from 'react-body-classname';
import ProfileImage from '../images/Tennis_Profile.png'
import shows from '../data/showdates.json';


/**
 * @author
 * @function HomeScreen
 **/

const HomeScreen = (props) => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = shows;
    setPosts(posts);
}, [posts]);



  return (
    <BodyClassName className="background-about">
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
              <tbody id="tourRows">
                    {
                        posts.map(post => {
                            return (
                              <tr key={post.id}>
                                <td>  
                                    <div className="seated-event-date-cell">
                                        {post.eventDate}
                                    </div>
                                    <div className="seated-event-venue-cell">
                                        {post.venueName}
                                    </div>
                                </td>
                                <td>
                                    <div className="seated-event-venue-location">
                                        {post.venueLocation}
                                    </div>             
                                </td>
                                <td> 
                                    <div className="seated-event-link-cells">
                                        <a className="seated-event-link1" href={post.eventURL} target="_blank" rel="noreferrer">
                                            {post.eventStatus}
                                        </a> 
                                    </div>

                                </td>
                              </tr>
                            );
                        })
                    }
              </tbody>
            </table>
          </div>
        </article>
      </main>
    </BodyClassName>
  );
};

export default HomeScreen;
