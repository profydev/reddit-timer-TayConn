import React from 'react';
import './description.css';

function Description() {
  return (
    <div className="mainContent__wrapper">
      <div>
        <h3 id="howWorks">How it works</h3>
        <ul>
          <li>We find the 500 top posts from the past year for a subreddit. </li>
          <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
          <li>See immediately when to submit your reddit post.</li>
        </ul>
      </div>
      <div>
        <h3 id="about">About</h3>
        <p>
          This app was created during a course on&nbsp;
          <a href="www.profy.dev" title="Click here to visit profy.dev">
            profy.dev
          </a>
          &nbsp;with the goal to implement a pixel-perfect real-world application with professional
          workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
          &nbsp;
          <a href="www.profy.dev" title="Click here to read more about the tools used process">
            Click here
          </a>
          &nbsp;for more information.
        </p>
      </div>
    </div>
  );
}
export default Description;
