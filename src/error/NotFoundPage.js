import { MDBContainer } from 'mdbreact';
import React from 'react';

const NotFoundPage = (props) => {
  return (
        <MDBContainer className="d-flex vh-100">
        <div className="d-flex w-100 justify-content-center align-self-center">
            <section className="text-center">
            <h1 className="text-center mx-auto">{props.content}</h1>
            </section>
        </div>
        </MDBContainer>
  )
}

export default NotFoundPage;