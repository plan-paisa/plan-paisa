import './index.css';
import React from 'react';
import { Service } from './Service';
import data from '../../../../data/services.json';

export const Services: React.FC = () => {
  return (
    <section className="section-padding bg-deep">
      <div className="container">
        <div className="section-head text-center mb74">
          <h2 className="title-line">Our Services</h2>
        </div>
        <div className="row">
          <div className="home-service-three owl-carousel owl-theme">
            {data.services.map((service, i) => (
              <Service key={i}
                title={service.title}
                description={service.description}
                className={service.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Services.displayName = 'Services';
