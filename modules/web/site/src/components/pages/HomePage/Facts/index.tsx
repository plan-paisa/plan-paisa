import './index.css';
import React from 'react';
import data from '../../../../data/facts.json'
import { Fact } from './Fact';

export const Facts: React.FC = () => {
  return (
    <section className="section-padding bg-deep">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title-line">Interesting facts</h2>
        </div>
        <div className="row">
          <div className="col-md-12" data-wow-delay="0.2s">
            <div className="carousel slide" data-ride="carousel" id="quote-carousel">
              {/* <!-- Bottom Carousel Indicators --> */}
              <ol className="carousel-indicators">
                {data.facts.map((fact, i) => (
                  <li key={i} className={(0===i) ? "active" : ""} data-slide-to={i} data-target="#quote-carousel">
                    <div className={`img-responsive ${fact.className}`}></div>
                  </li>
                ))}
              </ol>
              <div className="carousel-inner text-center">
                {data.facts.map((fact, i) => (
                  <Fact
                  key={i}
                  index={i}
                  summary={fact.summary}
                  statedBy={fact.statedBy}
                  category={fact.category}
                  />
                ))}
              </div>
              <div>
                {/* <!-- Carousel Buttons Next/Prev --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Facts.displayName = 'Facts';
