import React, { Fragment } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
} from "reactstrap";
import "./nav.css";


class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.reset();

    }

    reset() {
        this.state = {
            clusterInput: '',
            keyInput: ''
        };
    }



    componentDidMount = async () => {
    };

    handleClusterChange = (event) => {
        this.setState({ clusterInput: event.target.value });
    };

    handleKeyChange = (event) => {
        this.setState({ keyInput: event.target.value });
    };
    handleSearch = async () => {
        let clusterValue = this.state.clusterInput;
        let keyValue = this.state.keyInput;
        let clusterArray = clusterValue.split(',');
        let keyArray = keyValue.split(',');
        console.log(clusterArray)
        console.log(keyArray)
        /*try {
            const octokit = new Octokit();
            const result = await octokit
                .request('GET /users/{username}/repos', {
                    username: orgName,
                })
                .then(({ data }) => {
                    this.setState({ response: data, sortType: "byStag" });
                    console.log(this.state.response);
                });
        } catch (error) {
            this.setState({ modalOpen: true });
            console.log("Error");
        }*/
    };

    render() {
        return (
            <Fragment>
                <div className="mt-5">
                    <Row sm="3" lg="12" md="12" xs="3">
                        <Col lg="4" md="4" sm="3">
                        </Col>
                        <Col lg="4" md="4" sm="3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Cookie based results"
                                value={this.state.clusterInput}
                                onChange={this.handleClusterChange}
                            />
                        </Col>
                        <Col lg="4" md="4" sm="3">
                        </Col>
                    </Row>
                    <Row sm="3" lg="12" md="12" xs="3" className="mt-5">
                        <Col lg="4" md="4" sm="3">
                        </Col>
                        <Col lg="2">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Key"
                                value={this.state.keyInput}
                                onChange={this.handleKeyChange}
                            />


                        </Col>
                        <Col lg="2">
                            <button className="btn btn-primary" type="submit" onClick={this.handleSearch}>
                                Fetch
                            </button>


                        </Col>
                        <Col lg="4" md="4" sm="3">
                        </Col>
                    </Row>


                </div>
            </Fragment >
        );
    }
}

export default NavBarComponent;