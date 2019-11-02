import React from 'react';

export interface PageBannerProps {
  name: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({name = ''}) => {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="consultis-breadcumb banner-text">
              <ul>
                <li className="home-icon"><a href="/">Home</a></li>
                <li className="left-arrow-icon">{name}</li>
              </ul>
              <h2 className="color-black">{name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PageBanner.displayName = 'PageBanner';
