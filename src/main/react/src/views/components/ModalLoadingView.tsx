import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import LoadingView from "./LoadingView";

type Props = {}
type State = {}

class ModalLoadingView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<Modal backdrop={"static"} keyboard={false} centered={true} show={true}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Body>
                            <LoadingView/>
                        </Modal.Body>
                    </Modal.Header>
                </Modal.Dialog>
            </Modal>
        )
    };
}

export default ModalLoadingView;
