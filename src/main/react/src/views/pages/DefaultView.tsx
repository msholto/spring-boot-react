import React, {Component} from "react";
import {Container, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Display} from "../../Common";
import ModalQuestionView from "../components/ModalQuestionView";
import HeaderView from "../HeaderView";
import FooterView from "../FooterView";

interface Props {
}

interface State {
    value: string;
    display: Display;
}

class DefaultView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: "",
            display: Display.VIEW
        };

        this.changeValue = this.changeValue.bind(this);
        this.onQuestionOk = this.onQuestionOk.bind(this);
        this.onQuestionCancel = this.onQuestionCancel.bind(this);
    }

    isValueValid(): boolean {
        return (this.state.value !== null && this.state.value !== undefined && this.state.value.length > 0);
    }

    changeValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: e.target.value
        });
    }

    onQuestionOk() {
        this.setState({
            display: Display.EDIT
        })
    }

    onQuestionCancel() {
        this.setState({
            display: Display.NOTHING
        })
    }

    render() {
        return (<>
            <HeaderView/>
            <Container>
                {this.state.display === Display.VIEW && (<ModalQuestionView title={"Alert"}
                                                                            question={"Do you want to continue?"}
                                                                            onOk={this.onQuestionOk}
                                                                            onCancel={this.onQuestionCancel}/>)}
                {this.state.display === Display.EDIT && (<>
                    <FormGroup controlId={"example"}>
                        <FormLabel>Example</FormLabel>
                        <FormControl isValid={this.isValueValid()}
                                     isInvalid={!this.isValueValid()} required
                                     as={"input"}
                                     onChange={e => this.changeValue(e as any)}
                                     value={this.state.value}/>
                    </FormGroup>
                </>)}
            </Container>
            <FooterView/>
        </>);
    }
}

export default DefaultView;