import {Row} from "react-bootstrap";
import {Component} from "react";
import React from "react";

type Props = {}
type State = {}
class FooterView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Row className={"justify-content-center mt-5 mb-3"}>
                <p className={"p-2"}>Version 0.0.1-SNAPSHOT - ©App 2019</p>
            </Row>
        );
    }
}

export default FooterView;