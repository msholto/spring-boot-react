import React, {Component} from 'react';
import ModalLoadingView from "./components/ModalLoadingView";
import {FetchState} from "../Common";
import BackendIntegration from "../services/BackendIntegration";

type Props = {}
type State = { fetchState: FetchState }

class LogoutView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            fetchState: FetchState.LOADING
        };

        BackendIntegration.getFromBackend("/logout", (data: any) => {
            this.setState({
                fetchState: FetchState.LOADED
            })
        }, (error: string) => {
            this.setState({
                fetchState: FetchState.LOADED
            })
        });
    }

    render() {
        return (<>
            {this.state.fetchState === FetchState.LOADING && <ModalLoadingView/>}
            {this.state.fetchState === FetchState.LOADED && <>() => ({
                window.location.pathname = "/login"
            })()</>}
        </>);
    }
}

export default LogoutView;