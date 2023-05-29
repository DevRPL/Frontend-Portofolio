import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdbreact';
import Title from './Title';
import Loading from './Loading';

class YouTube extends Component {
    state = {
        response: [],
        loading: false
    }

    componentDidMount() {
        this.getDataProject();
    }

    showLoading = (param) => {
        this.setState({ loading: param });
    }

    getDataProject = async () => {
        this.showLoading(true);
        await axios.get('https://reversed-counselors.000webhostapp.com/backend/product-development.php')
            .then(result => {
                this.showLoading(false);
                this.setState({ response: result.data, loading: false });
            })
        .catch(error => {
            this.showLoading(true);
        }); 
    }
    
    render() {
        const data = this.state;
        return (
            <MDBContainer>
                <div className="dark-grey-text text-center">
                    <Title title="Personal Product Development" />
                </div>
                <div style={{ padding: '25px' }}></div>
                    <div className="row text-center">
                        {
                            data.loading ? <Loading /> :
                            data.response.map(result => {
                            return (
                                <div className="col-lg-4 col-md-6 mb-4" key={result.id}>
                                    <div className="view overlay rounded z-depth-2 mb-4">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title={result.title} className="embed-responsive-item" src={result.url}></iframe>
                                    </div>
                                </div>
                                <p className="mb-2 font-weight-bold">{ result.title }</p>   
                                    <a target="blank" className="btn btn-indigo btn-sm mb-3 waves-effect waves-light" href={result.url} >More <i className="fas fa-arrow-right"></i></a>
                                </div>
                                )
                            })
                        }
                    </div>  
            </MDBContainer>
        );
    }
}

export default YouTube;