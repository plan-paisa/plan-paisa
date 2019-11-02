import React from 'react';
import { PageBanner } from '../../atoms';

export const BlogsPage: React.FC = () => {
  return (
    <div>
      <PageBanner name="Blogs" />
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

BlogsPage.displayName = 'BlogsPage';
