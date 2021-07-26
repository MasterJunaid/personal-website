import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="12">
            <div className="pb-5 experience-center">
                <img className='center-img' src={data.companylogo} width={data.logoWidth} height={data.logoHeight} alt=""/>
                <p></p>
                <p className="lead text-center">
                  <b>{data.role}</b>
                    <br/>
                    {data.date}
                </p>
              <p>
                {data.description.map((item) => <p>{item}</p>)
                }
              </p>
            </div>
        </Col>
     );
}
 
export default ExperienceCard;