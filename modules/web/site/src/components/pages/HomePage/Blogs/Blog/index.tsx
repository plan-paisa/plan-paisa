import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogProps {
  title: string;
  date: string;
  summary: string;
  className: string;
}

export const Blog: React.FC<BlogProps> = ({ title, date, summary, className }) => {
  return (
    <div className="news">
      <div className="image"><div className={className}></div></div>
      <div className="content">
        <h4>{title}</h4>
        <div className="meta">
          <span className="quote">{date}</span>
          <span className="quote-two"></span>
        </div>
        <p>{summary}</p>
        <Link className="consultis-button" to="/blogs">Read More</Link>
      </div>
    </div>
  );
}

Blog.displayName = 'Blog';
