import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import MessageView from "./MessageView";

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
    message: string,
    showClose: boolean,
    onClose?: () => void
}
type State = {}

class ModalMessageView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<Modal backdrop={"static"} keyboard={false} centered={true} show={true}>
                <Modal.Dialog>
                    <Modal.Body>
                        <MessageView variant={this.props.variant} title={this.props.title} message={this.props.message}/>
                    </Modal.Body>

                    {this.props.showClose && (
                        <Modal.Footer className={"justify-content-between"}>
                            <Button variant={this.props.variant}
                                    onClick={(this.props.onClose !== null && this.props.onClose !== undefined) ? this.props.onClose : () => {
                                    }}>Close</Button>
                        </Modal.Footer>)}
                </Modal.Dialog>
            </Modal>
        )
    };
}

export default ModalMessageView;
