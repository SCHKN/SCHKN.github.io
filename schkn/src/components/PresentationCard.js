import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import CardHeader from './CardHeader.js';
import AppCardBody from './AppCardBody.js';

const PresentationCard = (props) => {
  return (
    <div className="presentation-card">
      <CardHeader value={props.value} />
      <AppCardBody langage={props.langage}/>
    </div>
  );
};

export default PresentationCard;
