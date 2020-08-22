import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <a href={work.url}>
              <h3>{work.company}</h3>
            </a>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>
              {work.description}
              <a href={work.link}>{work.linkdesc}</a>
            </p>
          </div>
        );
      });

      var skills = this.props.data.skills.map((skills) => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span
              style={{
                width: skills.level,
                backgroundColor: this.getRandomColor(),
              }}
              className={className}
            ></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div className="row skills">
          <div className="three columns header-col">
            <h1>
              <span>Interests</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <ul>
              <li>- Caffeination</li>
              <li>
                <b>- Digital therapeutics</b>
              </li>
              <li>
                - Forming strong opinions of movies with absolutely no
                qualification or education to do so{" "}
                <i>
                  (P.S, Good Will Hunting is the greatest film of all time, feel
                  free to ask me why)
                </i>
              </li>
              <li>
                <b>- Robotics</b>
              </li>
              <li>- Dominating fantasy football leagues</li>
              <li>
                <b>- Aerospace engineering / Space travel</b>
              </li>
              <li>- Guitar: Learning online during quarantine</li>
              <li>
                <b>- Technology that assists underrepresented groups</b>
              </li>
              <li>- Being exceptionally average at video games</li>
              <li>
                <b>- What it feels like to know you've changed the world 🌎</b>
              </li>
              <li>- Anything science fiction</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
