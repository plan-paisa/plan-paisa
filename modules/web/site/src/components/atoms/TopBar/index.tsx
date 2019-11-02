import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="topbar bg-navyblue">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-7 col-xs-7 no-padding">
            <ul className="top-address">
              <li><span className="icon"><i className="fa fa-phone"></i></span> (+91) 123 123 789 </li>
              <li><span className="icon"><i className="fa fa-envelope"></i></span> info@planpaisa.com  </li>
              <li><span className="icon"><i className="fa fa-map-marker"></i></span> New Delhi, India </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

TopBar.displayName = 'TopBar';
