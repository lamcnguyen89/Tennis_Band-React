import Nav from "../components/nav";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import React from "react";

/**
 * @author
 * @function ContactScreen
 **/

const ContactScreen = (props) => {
  return (
    <div className="background-contact">
      <Masthead />
      <Nav />
      <main className="container p-2 mb-4 rounded">
        <h1 className="headingformats">Contact Us</h1>
        <hr />

        <article className="row justify-content-center">
          <article className="col-sm-12">
            <form action="/contact" id="contact-form" method="post">
              <article className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required="required"
                  placeholder="First Name and Last Name"
                />
              </article>
              <article className="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  required="required"
                  placeholder="Example@gmail.com"
                />
              </article>
              <article className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  required="required"
                  rows="5"
                  placeholder="Add your message here"
                ></textarea>
              </article>
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </form>
          </article>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ContactScreen;
