import React from 'react';
import { PageBanner } from '../../atoms';

export const ContactUsPage: React.FC = () => {
  return (
    <div>
      <PageBanner name="Contact Us" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <p>Under construction ...!!!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ContactUsPage.displayName = 'ContactUsPage';
