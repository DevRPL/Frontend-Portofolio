import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Title from './Title.jsx';
import LazyLoad from 'react-lazyload';
import Loading from './Loading.jsx';
import { Button, Modal } from 'react-bootstrap';

class Portfolio extends Component
{
    state = {
        response: [],
        loading: false,
        show: false,
        selectedImage: null,
    }

    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = (image) => {
      this.setState({ show: true, selectedImage: image });
    }

    componentDidMount() {
        this.getDataPortofolio();
    }

    showLoading = () => {
        this.setState({ loading: true });
    }

    hideLoading = () => {
        this.setState({ loading: false });
    }

    getDataPortofolio = async () => {
        this.showLoading();
        await axios.get('./data/portofolio.json')
            .then(result => {
                this.hideLoading();
                this.setState({ response: result.data, loading: false });
            })
        .catch(error => {
            this.showLoading();
        }); 
    }

    render = () => {
        const data = this.state;
    return (
       <div>
            <MDBContainer className="mt-5">
                <div className="text-center">
                    <Title title="Portofolio"/>
                </div>
                <MDBRow>
                    {
                        data.loading ?
                        <Loading />
                        :
                        data.response.map(result => {
                            return (
                                <MDBCol key={result.id} md='4' className="pt-3" onClick={() => this.handleShow(result.image)} style={{ cursor: 'pointer' }}>
                                    <LazyLoad>
                                        <Card title={result.title} image={result.image} description={result.description}/>
                                    </LazyLoad>
                                </MDBCol>
                            )
                        })
                    }
                  <Modal show={this.state.show} onHide={this.handleClose} size="xl">
                    <Modal.Body>
                      <img src={this.state.selectedImage} alt="" style={{ maxWidth: '100%' }} />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={this.handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </MDBRow>
            </MDBContainer>
         </div>
        )
    }
}

export default Portfolio;
