import './index.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { Copyright } from '../../atoms';
import data from '../../../data/menu.json';

export const Footer: React.FC = () => {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="footer-info">
                <Link to="/"><div className="logo footer-logo"></div></Link>
                <ul className="address">
                  <li className="address-title">
                    <p>203, Envato Labs, Behind Alis Steet,<br /> Melbourne, Australia.</p>
                  </li>
                  <li>
                    <p><i className="fa fa-phone"></i> 123-456-789</p>
                  </li>
                  <li>
                    <p><i className="fa fa-globe"></i> https://planpaisa.com</p>
                  </li>
                  <li>
                    <p><i className="fa fa-envelope-o"></i> info@planpaisa.com </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 footer-link">
              <div className="footer-info">
                <h4><Link to="">Quick Link</Link></h4>
                <ul className="link-list">
                  {data.menus.map((menu, i) => (
                    <li key={i}><Link to={menu.hash}>{menu.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="footer-info">
                <h4><Link to="">News Latest</Link></h4>
                <div className="image img-content">
                  <Link to=""><div className="img-responsive footer-news"></div></Link>
                  <div className="content">
                    <p>
                      <Link to="">A New Dawn for<br />Corporate</Link>
                    </p>
                    <span>oct 10</span>
                  </div>
                </div>
                <div className="image img-content">
                  <Link to=""><div className="img-responsive footer-news"></div></Link>
                  <div className="content">
                    <p>
                      <Link to="">A New Dawn for<br />Corporate</Link>
                    </p>
                    <span>oct 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Copyright />
    </div>
  );
}

Footer.displayName = 'Footer';
