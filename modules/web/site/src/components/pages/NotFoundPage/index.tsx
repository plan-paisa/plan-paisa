import React from 'react';
import { PageBanner } from '../../atoms';

export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <PageBanner name="404" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="error-page text-center">
                <h1>404</h1>
                <h3>0ops,Page Not Found!</h3>
                <p>We are sorry but the page you are looking for doesn't exist</p>
                <a className="consultis-success-button mt20" href="/">Back to home page</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

NotFoundPage.displayName = 'NotFoundPage';
