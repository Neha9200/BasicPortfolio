import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contacts extends Component {
  render() {
    return (
      <div>
        <h2>You can reach to me on </h2>
        <p>Mob: 1234567899</p>
        <p style={{ marginBottom: "2rem" }}>
          You can mail me at @nehamr3@gmail.com or click on the link below.
        </p>
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        <a
          href="https://twitter.com/home"
          style={{
            textShadow: "0 1px 0 rgba(0,0,0,0.1)",
            margin: "0rem 1rem 0rem 0.5rem",
            textDecoration: "none",
            color: "#ced4da",
          }}
        >Twitter
        </a>

        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        <a
          href="https://www.linkedin.com/in/neha-m-r-434160197"
          style={{
            textShadow: "0 1px 0 rgba(0,0,0,0.1)",
            margin: "0rem 1rem 0rem 0.5rem",
            textDecoration: "none",
            color: "#ced4da",
          }}
        >LinkedIn
        </a>

        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        <a
          href="https://github.com/Neha9200"
          style={{
            textShadow: "0 1px 0 rgba(0,0,0,0.1)",
            margin: "0rem 1rem 0rem 0.5rem",
            textDecoration: "none",
            color: "#ced4da",
          }}
        >Github
        </a>
      </div>
    );
  }
}

export default Contacts;
