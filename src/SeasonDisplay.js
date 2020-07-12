import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
  winter: {
    text: "Brrr, it's chilly",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`rotating icon-left huge ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`rotating icon-right huge ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
