import React, {Component} from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import history from './services/AppHistory';

import 'bootstrap/dist/css/bootstrap.min.css';
import {FetchState} from "./Common";
import ModalMessageView from "./views/components/ModalMessageView";
import ModalLoadingView from "./views/components/ModalLoadingView";
import './App.css'
import {ACTUAL_USER_ROLES, AuthorizationWithoutRender} from "./services/Authorization";
import BackendIntegration from "./services/BackendIntegration";
import {BackendDto} from "./models/generated/BackendDto";
import LogoutView from "./views/LogoutView";
import DefaultView from "./views/pages/DefaultView";
import OnlyAdminView from "./views/pages/OnlyAdminView";

type Props = {}
type State = { fetchState: FetchState, roles: Array<BackendDto.IRoles> }

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            fetchState: FetchState.PRE_LOAD,
            roles: []
        };
    }

    componentDidMount() {
        this.getRoles();
    }

    getRoles() {
        BackendIntegration.getFromBackend("/UserInfo/getRoles", (data: BackendDto.IGetRolesResponse) => {
            ACTUAL_USER_ROLES.replaceUserRoles(data.roles);

            this.setState({
                fetchState: FetchState.LOADED,
                roles: data.roles
            });
        }, (error: string) => {
            this.setState({
                fetchState: FetchState.LOADED_WITH_ERROR,
            });
        });
    }

    render() {
        if (this.state.fetchState === FetchState.PRE_LOAD) {
            return (
                <ModalLoadingView/>
            )
        } else if (this.state.fetchState === FetchState.LOADED_WITH_ERROR) {
            return (
                <ModalMessageView variant={"danger"} title={"Error"}
                                  message={"Could not fetch needed files about logged user"}
                                  showClose={false}/>
            )
        } else {
            return (
                <Router history={history}>
                    <Switch>
                        <Route exact path="/"
                               component={AuthorizationWithoutRender(<Redirect to={"/ui/"}/>, [], true)}/>
                        <Route exact path="/ui/" component={AuthorizationWithoutRender(<DefaultView/>, [], true)}/>
                        <Route path="/ui/OnlyAdmin/show"
                               component={AuthorizationWithoutRender(<OnlyAdminView/>, ["ROLE_ADMIN"], true)}/>
                        <Route path="/ui/Logout"
                               component={AuthorizationWithoutRender(<LogoutView/>, [], true)}/>
                    </Switch>
                </Router>
            )
        }
    };
}

export default App;
