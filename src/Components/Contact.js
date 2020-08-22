import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <a href="mailto:tyler.hansen@colby.edu">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </a>
          </div>

          <div className="ten columns">
            <p className="lead">
              Want to reach out? Please{" "}
              <a href="mailto:tyler.hansen@colby.edu">shoot me an email</a> or
              reach out to me on one of the social media platforms linked below.
              Alternatively, if you require my attention via snail mail:
            </p>
            <h4>Address</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </div>

        <aside className="three  columns footer-widgets">
          <div className="widget widget_contact"></div>
        </aside>
      </section>
    );
  }
}

export default Contact;
