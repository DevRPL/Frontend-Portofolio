import React, { Component } from "react";
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Loading from "./Loading";
import Title from "./Title";

class CardSkill extends Component {

    state = {
        response: [],
        loading: false
    }

    componentDidMount() {
        this.getDataSkill();
    }

    showLoading = () => {
        this.setState({ loading: true });
    }

    hideLoading = () => {
        this.setState({ loading: false });
    }

    getDataSkill = async () => {
        this.showLoading(true);
        await axios.get('./data/skills.json')
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
            <MDBContainer className="mt-5">
                <div className="text-center">
                    <Title title="Skill" />
                </div>
                <MDBRow>
                    {
                        data.loading ? <Loading /> :
                            data.response.map(result => {
                                return (
                                    <MDBCol md='3' className="pt-3" key={result.id}>
                                        <div className="cardCustom text-center">
                                            <div className="card-body">
                                                <a target="_blank" href={result.url} rel="noreferrer noopener" >
                                                    <div style={{ maxheight: '35px' }}>
                                                        <img src={result.image} alt={result.id} />
                                                    </div>
                                                    <h6 className="pt-4">{result.experience} experince</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </MDBCol>
                                )
                            })
                    }
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default CardSkill;