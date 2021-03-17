import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from "react-router-dom";
import axios from "axios";

class Feedback extends Component {

    state = {
        name: '',
        title: '',
        description: '',
        status: false
    }
    
    postFeedback = () => {
        axios.post('https://production-backend-portofolio.herokuapp.com/postFeedback', {
            data: {
              name: this.state.name,
              title: this.state.title,
              description: this.state.description
            }
        }).then(response => {
            this.resetForm();
        })
        .catch(function (error) {
            
        });
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    resetForm = () => {
        this.setState({
            name: '',
            title: '',
            description: '',
            status:false
        });
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        this.postFeedback()
        this.setState({
            status: true
        });
    }

    render(){
        return (
            <MDBContainer>
            <form className="p-5" onSubmit={this.handlerSubmit}>
                <MDBRow className="justify-content-center">
                    <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                        <div className="text-center">
                            <h3 className="dark-grey-text mb-5">
                                <strong>Feedback</strong>
                            </h3>
                        </div>
                        <MDBInput
                            label="Your Name"
                            group
                            name="name"
                            type="text"
                            value={this.state.name} 
                            onChange={this.changeNameHandler}
                        />
                        <MDBInput
                            label="Title"
                            group
                            name="title"
                            type="text"
                            validate
                            value={this.state.title} 
                            onChange={this.changeTitleHandler}
                        />
                        <MDBInput
                            label="Description"
                            group
                            type="textarea"
                            validate
                            name="description"
                            rows="3"
                            value={this.state.description} 
                            onChange={this.changeDescriptionHandler}
                        />
                        <div className="text-center mb-3">
                            <MDBBtn
                                type="submit"
                                gradient="blue"
                                rounded
                                className="btn-block z-depth-1a"
                                value="save"
                                disabled={this.state.status}
                            >
                            {
                                this.state.status ? 'Wait please...' :
                                <>
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                </>
                            }
                            </MDBBtn>
                        </div>
                            <Link to="/" className="font-small text-right d-flex justify-content-center mb-3 pt-2"> Back to home</Link>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </form>
            </MDBContainer>
        );
    }
};

export default Feedback;
