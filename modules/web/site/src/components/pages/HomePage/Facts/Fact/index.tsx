import React from 'react';

export interface FactProps {
  index: number
  statedBy: string;
  summary: string;
  category: string;
}

export const Fact: React.FC<FactProps> = ({ index, statedBy, summary, category }) => {
  return (
    <div className={`item ${(0 === index) ? "active" : ""}`}>
      <div className="text-center">
        <p className="client-text">{summary}</p>
      </div>
      <h4>{statedBy}</h4>
      <p className="designation">{category}</p>
    </div>
  );
}

Fact.displayName = 'Fact';
