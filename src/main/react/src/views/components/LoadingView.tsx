import React, {Component} from 'react';
import {Row, Spinner} from "react-bootstrap";

type Props = {}
type State = {}

class LoadingView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Row className={"justify-content-center"}>
                <Spinner animation="border" variant="primary"/>
                <p className={"ml-3 mt-1"}><b>Loading...</b></p>
            </Row>
        )
    };
}

export default LoadingView;
