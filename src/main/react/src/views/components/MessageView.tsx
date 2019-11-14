import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

type Props = {
    variant:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'dark'
        | 'light',
    title: string,
    message: string
}
type State = {}

class MessageView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Alert variant={this.props.variant}>
                <Alert.Heading>{this.props.title}</Alert.Heading>
                <p>{this.props.message}</p>
            </Alert>
        );
    };
}

export default MessageView;
