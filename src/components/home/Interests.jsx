/*
Code from: https://github.com/anaashrafi/home/blob/master/src/components/home/Interests.jsx
 */
import React from "react";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Card from "react-bootstrap/Card";
// import CardDeck from 'react-bootstrap/CardDeck'
// import Button from 'react-bootstrap/Button'
// import {
//   aboutHeading,
//   aboutDescription,
//   showInstaProfilePic,
//   instaLink,
//   instaUsername,
//   instaQuerry,
// } from "../../editable-stuff/configurations.json";
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
          <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>

            <div className="row" style={divStyle}>
              <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Running</p>
                <img src="https://img.icons8.com/nolan/128/running.png"/>
                <p className="lead text-center">
                  One of my favorite parts of the day is going for a summer run. It helps break up my work day and allows me to listen
                  to an interesting podcast or just think while exploring Atlanta!
                  Currently trying to build back up to a 10k!
                </p>
              </div>
              <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/nolan/128/saving-book.png"/>
                <p className="lead text-center">
                  I am an avid learner and my favorite medium to learn is through written text. My favorite books are nonfiction books about technology, health research, and biographies.
                  Check out what I've been reading on <a href="https://www.goodreads.com/user/show/62971015-ryan-miles" target="_blank">Goodreads</a>!
                </p>
              </div>
              <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Video Production</p>
                <img src="https://img.icons8.com/nolan/128/video.png"/>
                <p className="lead text-center">
                  For a fun creative hobby, I love to make videos! I enjoy the technical aspect of getting a great shot
                  and making the video exciting. Currently I use DaVinci Resolve, but used Adobe Premiere in the past.
                  Checkout some of my vlogs and advice videos on <a href='https://www.youtube.com/channel/UCd-L5vUAWxnNArskdBkKM6A' target='_blank'>YouTube</a>!
                </p>
              </div>
              <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Cooking</p>
                <img src="https://img.icons8.com/nolan/128/kitchenwares.png"/>
                <p className="lead text-center">
                  Ever since I was young I loved watching the food network channel and now love to practice what I have watched throughout those years.
                  My current recipe I am trying to master is a perfect smash burger with homemade buns. After I plan to explore all types of cuisines from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;