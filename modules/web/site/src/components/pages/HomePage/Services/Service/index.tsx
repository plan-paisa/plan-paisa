import React from 'react';

export interface ServiceProps {
  title: string;
  description: string;
  className: string;
}

export const Service: React.FC<ServiceProps> = ({ title, description, className }) => {
  return (
    <div className="project-item">
      <div className="image"><div className={`img-responsive ${className}`}></div></div>
      <div className="service-text text-center">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

Service.displayName = 'Service';
