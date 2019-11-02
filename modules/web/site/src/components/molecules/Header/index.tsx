import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { TopBar } from '../../atoms';
import data from '../../../data/menu.json';

interface Menu {
  name: string;
  hash: string;
}

export const Header: React.FC = () => {
  return (
    <div>
      <TopBar />
      <header className="default-header">
        <nav id="cssmenu">
          <div className="logo">
            <Link to="/"><div className="header-logo" ></div></Link>
          </div>
          <div id="head-mobile"></div>
          <div className="button"></div>
          <ul className="pull-right">
            {data.menus.map((menu, i) => (
              <li key={i}><Link key={i} to={menu.hash}>{menu.name}</Link></li>
            ))}
            <li><Link className="consultis-button" to="/contact-us">Get in touch</Link></li>
          </ul>
        </nav>
        {/* #cssmenu */}
      </header>
    </div>
  );
}

Header.displayName = 'Header';
