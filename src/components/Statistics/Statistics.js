import React from 'react';
import './Statistics.css';

export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map((stat, index) => (
            <li className="item-ststs" key={index}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
