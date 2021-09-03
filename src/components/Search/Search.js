import React from 'react';
// import React, { useState } from 'react';
import './search.css';
// import { javascript } from 'webpack';

function Search() {
  return (
    <div className="search__container">
      <button type="button" className="button --orange" title="Click here to look up the best time to publish a post on your reddit sub." id="button-searchTime search">Show me the best time</button>
    </div>
  );
}

export default Search;
