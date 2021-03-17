import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Title from './Title.jsx';
import LazyLoad from 'react-lazyload';
import Loading from './Loading.jsx';

class Portfolio extends Component
{
    state = {
        response: [],
        loading: false
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
        await axios.get('https://production-backend-portofolio.herokuapp.com/todo/portofolio')
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
                                <MDBCol key={result.id} md='4' className="pt-3">
                                    <LazyLoad>
                                        <Card title={result.title} image={result.image} description={result.description}/>
                                    </LazyLoad>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
         </div>
        )
    }
}

export default Portfolio;
