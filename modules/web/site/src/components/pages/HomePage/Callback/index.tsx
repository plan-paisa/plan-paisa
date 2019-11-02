import './index.css';
import React from 'react';
import data from '../../../../data/services.json';

export const Callback: React.FC = () => {
  return (
    <section className="call-section bg-deep">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 no-padding">
            <div className="image">
              <div className="img-callback"></div>
            </div>
            <div className="call-banner">
              <h2>Request A call Back</h2>
              <p>
                Whatever types of questions you&#39;ll have feel free to get in touch with us. Our motto is to financially literate people.
              </p>
              <ul className="contact-list">
                <li>MON - FRI: 8h00 - 16h00 | SAT - SUN: Close</li>
                <li>(+80) 123 456 789 | (+88) 987 654 321</li>
                <li>info@planpaisa.com</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <form id="contact">
                <div className="input-field">
                  <select className="form-control mb10" name="text">
                    {data.services.map((service, i) => (
                      <option key={i}>{service.title}</option>
                    ))}
                  </select>
                  <input className="form-control" name="name" placeholder="Name" type="text" />
                  <input className="form-control" name="email" placeholder="Email" type="email" />
                </div>
                <div className="message-box"><textarea className="no-border" name="message" placeholder="Message" >
                </textarea>
                </div>
                <input name="recipient_email" type="hidden" value="info@planpaisa.com" />
                <input name="from_email" type="hidden" value="info@planpaisa.com" />
                <button className="consultis-button mt30" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Callback.displayName = 'Callback';
