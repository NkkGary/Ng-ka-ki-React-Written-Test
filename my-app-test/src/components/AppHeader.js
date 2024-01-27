import React, { useState, useRef, useEffect } from "react";
import "./AppHeader.css";

const AppHeader = ({ onSearch }) => {
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
  };

  // Click Outside Handler
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchActive(false);
    }
  };

  // Effect for Click Outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="app-header">
      <h1 className="app-title">Whatsapp</h1>
      <div className="header-right-container">
        <div
          className={`outer-bubble ${searchActive ? "active" : "white-border"}`}
          ref={searchRef}
        >
          <div className={`bubble ${searchActive ? "active" : ""}`}>
            {searchActive ? (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
                autoFocus={searchActive}
              />
            ) : null}
            <button
              aria-label="Toggle search"
              className="search-btn"
              onClick={toggleSearch}
            >
              <svg
                aria-hidden="true"
                className="s-input-icon s-input-icon__search svg-icon iconSearch search-icon" // Added the search-icon class here
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7 a5 5 0 0 1 10 0Z"
                  fill="#c1c1c1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <button className="menu-btn">⋮</button>
      </div>
    </header>
  );
};

export default AppHeader;

<svg
aria-hidden="true"
className="s-input-icon s-input-icon__search svg-icon iconSearch search-icon" // Added the search-icon class here
width="18"
height="18"
viewBox="0 0 18 18"
>
<path
  d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7 a5 5 0 0 1 10 0Z"
  fill="#c1c1c1"
></path>
</svg>