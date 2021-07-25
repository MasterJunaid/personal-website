import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab"
import {Tabs} from "react-bootstrap";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({projects}) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <Tabs defaultActiveKey="android" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="android" title="Android Projects">
            <h2 className="display-4 pb-5 text-center">Android Projects</h2>
            <Row>
              {projects.androidProjects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))}
            </Row>
          </Tab>
          <Tab eventKey="web" title="Web Projects">
            <h2 className="display-4 pb-5 text-center">Web Projects</h2>
            <Row>
              {projects.webProjects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))}
            </Row>
          </Tab>
          <Tab eventKey="graphics" title="Graphics Projects">
            <h2 className="display-4 pb-5 text-center">Graphics Projects</h2>
            <Row>
              {projects.graphicsProjects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))}
            </Row>
          </Tab>
          <Tab eventKey="ai" title="AI Projects">
          <h2 className="display-4 pb-5 text-center">AI Projects</h2>
          <Row>
            {projects.aiProjects.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))}
          </Row>
          </Tab>
          <Tab eventKey="other" title="Other Projects">
            <h2 className="display-4 pb-5 text-center">Other Projects</h2>
            <Row>
              {projects.otherProjects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
};

export default Project;
