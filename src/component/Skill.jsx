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
        await axios.get('https://reversed-counselors.000webhostapp.com/backend/skills.php')
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
                    <Title title="Skill"/>
                </div>
                <MDBRow>
                    {
                        data.loading ? <Loading /> :
                        data.response.map(result => {
                            return (
                                <MDBCol md='3' className="pt-3" key={result.id}>
                                    <div className="cardCustom text-center">
                                        <div className="card-body">
                                            <div style={{ maxheight: '35px' }}>
                                                <img src={result.image} alt="Vue logo" />
                                            </div>
                                            <h6 className="pt-4">{result.experience} experince</h6>
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