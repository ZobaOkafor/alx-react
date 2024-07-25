import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ position: 'absolute', right: '10px', top: '10px' }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '20px', height: '20px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
