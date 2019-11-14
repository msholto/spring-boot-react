// @ts-ignore
import SideNav, {NavIcon, NavItem, NavText} from "@trendmicro/react-sidenav";

import React, {Component} from 'react';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {AuthorizationWithRender} from "../services/Authorization";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SESSION_TIMEOUT} from "../Common";
import BackendIntegration from "../services/BackendIntegration";
import Time from "../services/Time";
import {Redirect} from "react-router-dom";
import {faAddressBook, faCog, faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import AppHistory from "../services/AppHistory";

type Props = {}
type State = { sessionTimeout: string, logout: boolean }

class HeaderView extends Component<Props, State> {

    interval?: NodeJS.Timeout;

    constructor(props: Props) {
        super(props);

        this.state = {
            sessionTimeout: Time.formatFromMinutes(SESSION_TIMEOUT),
            logout: false
        };

        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        if (BackendIntegration.globalSessionTimeoutReset) {
            BackendIntegration.globalSessionTimeoutReset = false;
            BackendIntegration.globalSessionTimeout = SESSION_TIMEOUT;
        } else {
            BackendIntegration.globalSessionTimeout = (BackendIntegration.globalSessionTimeout - 1000);
        }

        if (BackendIntegration.globalSessionTimeout <= 0) {
            this.setState({
                logout: true
            })
        } else {
            this.setState({
                sessionTimeout: Time.formatFromMinutes(BackendIntegration.globalSessionTimeout)
            });
        }
    }

    componentWillUnmount(): void {
        if (this.interval !== null && this.interval !== undefined) {
            clearInterval(this.interval);
        }
    }

    render() {
        if (!this.state.logout) {
            return (
                <SideNav className={"sideNav"}
                         onSelect={(selected: React.FormEvent) => {
                             const to = '/ui/' + selected;

                             AppHistory.push(to);
                         }}>
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected="">
                        <NavItem eventKey="">
                            <NavIcon><FontAwesomeIcon icon={faAddressBook}/></NavIcon>
                            <NavText>Home</NavText>
                        </NavItem>
                        {AuthorizationWithRender(<NavItem eventKey="OnlyAdmin/show">
                            <NavIcon><FontAwesomeIcon icon={faCog}/></NavIcon>
                            <NavText>Only Admin</NavText>
                        </NavItem>, ["ROLE_ADMIN"], false)}
                        <NavItem eventKey="Logout">
                            <NavIcon><FontAwesomeIcon icon={faDoorOpen}/></NavIcon>
                            <NavText>Logout</NavText>
                        </NavItem>
                        <NavItem eventKey="">
                            <NavIcon>{this.state.sessionTimeout}</NavIcon>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            );
        } else {
            return <Redirect to={"/Logout"}/>;
        }
    }
}

export default HeaderView;