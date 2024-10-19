// src/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-box">
      <div className="dashboard">
        <div className="dashboard-item">
          <div className="number">24/7</div>
          <div className="label">Service</div>
        </div>
        <div className="dashboard-item">
          <div className="number">10K</div>
          <div className="label">Users</div>
        </div>
        <div className="dashboard-item">
          <div className="number">8</div>
          <div className="label">User Reviews</div>
        </div>
        <div className="dashboard-item">
          <div className="number">80+</div>
          <div className="label">Professional Teams</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
