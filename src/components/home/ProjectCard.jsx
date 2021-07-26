import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import {Button} from "react-bootstrap";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    playstore_link,
    image,
    link,
    linkTitle,
    codeLink,
    codeLinkTitle,
    languages,
    date
  } = value;
  return (
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={image}  />
        <Card.Body>
          <Card.Title as="h2">{name} </Card.Title>
          <Card.Text >
            {description.map((item) => <p>• {item}</p>)
            }
          </Card.Text>
          <hr />
          {
            <Language languages={languages} />
          }
          {
            <CardFooter date={date} />
          }
        </Card.Body>
        {playstore_link? <Button href={playstore_link} target="_blank" variant="success">Google Play Store</Button> : <></> }
        {playstore_link? <br/> : <></>}
        {link? <Button href={link} target="_blank" variant="primary">{linkTitle? linkTitle : 'View Project'}</Button> : <></> }
        {codeLink? <br/> : <></>}
        {codeLink? (<Button href={codeLink} target="_blank" variant="outline-dark">{codeLinkTitle? codeLinkTitle : 'View Code'}</Button>) : <></>}
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <>
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mr-3"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary">
        <i className="fab fa-github" /> Repo
      </a>
    </>
  );
};

const Language = ({ languages }) => {

  return (
    <div className="pb-3">
      Languages:{" "}
      {languages.length
        ? languages.map((language) => (
            <a
              key={language} 
              className="badge badge-light"
            >
              {language.name}
              {language.percent? ": ": "" }
              {language.percent}
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ date }) => {

  return (
    <p className="card-text">
      <small className="text-muted">Date: {date}</small>
    </p>
  );
};

export default ProjectCard;
