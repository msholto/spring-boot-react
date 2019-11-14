import {Component} from "react";
import {FormControl, FormGroup, FormLabel, Container} from "react-bootstrap";
import React from "react";
import HeaderView from "../HeaderView";
import FooterView from "../FooterView";

interface Props {
}

interface State {
    value: string;
}

class OnlyAdminView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    isValueValid(): boolean {
        return (this.state.value !== null && this.state.value !== undefined && this.state.value.length > 0);
    }

    changeValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (<>
            <HeaderView/>
            <Container>
                <FormGroup controlId={"example"}>
                    <FormLabel>This should be seen only by ROLE_ADMIN</FormLabel>
                </FormGroup>
            </Container>
            <FooterView/>
        </>);
    }
}

export default OnlyAdminView;