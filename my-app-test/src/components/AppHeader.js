// src/components/AppHeader.js
import React from 'react';
/* import searchIcon from '../materials/search.png'; // Adjust the path to your search icon image */

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1 className="app-title">Whatsapp</h1>
      <div className="header-icons">
        <button className="icon-btn">
          {/* <img src={searchIcon} alt="Search" className="icon" /> */}
          <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18">
            <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
          </svg>
        </button>
        <button className="icon-btn">⋮</button>
      </div>
    </header>
  );
};

export default AppHeader;
