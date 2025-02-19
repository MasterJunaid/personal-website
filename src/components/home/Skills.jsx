import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {SkillsTab, ProgrammingSkillsTab} from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, skills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="programming-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="programming-skills"
            title="Programming Languages"
          >
            <Row className="pt-3 px-1">
              <ProgrammingSkillsTab skills={skills.programmingLanguages} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="android-lib-skills"
            title="Android Libraries"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skills.androidLibraries} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="coursework-skills"
            title="Coursework"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skills.coursework} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="concepts-skills"
            title="Concepts"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={skills.concepts} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
