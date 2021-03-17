import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';

const Card = (props) => {
  return (
	<MDBCard className="cardCustom">
		<img className="card-img-top img-fluid text-center" src={props.image} alt={`img-${Math.random()}`} />
		<MDBCardBody className="text-center">
			<h5 className="title-card">{props.title}</h5>
			<MDBCardText className="description">{props.description}</MDBCardText>
		</MDBCardBody>
	</MDBCard>
  )
}

export default Card;