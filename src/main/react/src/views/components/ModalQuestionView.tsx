import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

type Props = {
    title: string,
    question: string,
    onOk: () => void,
    onCancel: () => void
}
type State = {}

class ModalQuestionView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (<Modal backdrop={"static"} keyboard={false} centered={true} show={true}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.question}</p>
                    </Modal.Body>

                    <Modal.Footer className={"justify-content-between"}>
                        <Button variant={"primary"} onClick={this.props.onOk}>Ok</Button>
                        <Button variant={"primary"} onClick={this.props.onCancel}>Cancel</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        )
    };
}

export default ModalQuestionView;
