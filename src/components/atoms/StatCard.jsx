import React from 'react';
import PropTypes from 'prop-types';
import './css/StatCard.css';

const StatCard = ({ title, description, icon }) => {
  return (
    <div className="stat-card">
      {icon && <div className="stat-icon">{icon}</div>}
      <h3 className="stat-title">{title}</h3>
      <p className="stat-description">{description}</p>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node
};

export default StatCard;