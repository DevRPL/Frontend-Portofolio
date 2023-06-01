import React from 'react';
import { MDBContainer } from 'mdbreact';

const Loading = () => {
    return (
        <MDBContainer className="mt-5 d-flex vh-100">
        <div className="d-flex w-100 justify-content-center align-self-center">
            <div className="text-center mx-auto w-responsive mb-5">
                <div className="spinner-grow fast" role="status">
                    <span className="visually-hidden sr-only">Loading...</span>
                </div>
                <strong className="ml-1"> Please Wait..</strong>
            </div>
        </div>
    </MDBContainer>
    );
}

export default Loading;