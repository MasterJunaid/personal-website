import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="12">
            <div className="pb-5 text-center">
                <img className="" src={data.companylogo} width={data.logoWidth} height={data.logoHeight} alt=""/>
                <p className="lead">
                  <b>{data.role}</b>
                    <br/>
                    {data.date}
                </p>
              <p>
                {data.description}
              </p>
            </div>
        </Col>
     );
}
 
export default ExperienceCard;