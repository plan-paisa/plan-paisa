import './index.css';
import React from 'react';
import { Blog } from './Blog';
import data from '../../../../data/blogs.json';

export const Blogs: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-head text-left mb85">
          <h2 className="title-line-left">Latest Blogs</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="latest-news owl-carousel owl-theme custom-navs">
              {data.blogs.map((blog, i) => (
                <Blog key={i}
                  title={blog.title}
                  date={blog.date}
                  summary={blog.summary}
                  className={blog.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Blogs.displayName = 'Blogs';
