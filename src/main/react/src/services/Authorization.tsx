import {Component, ReactNode} from 'react';
import React from 'react';
import ModalMessageView from "../views/components/ModalMessageView";
import {BackendDto} from "../models/generated/BackendDto";

type Props = {}
type State = {}

class UserRoles {
    userRoles: Array<BackendDto.IRoles>

    constructor() {
        this.userRoles = [];
    }

    replaceUserRoles(newUserRoles: Array<BackendDto.IRoles>) {
        this.userRoles.length = 0;

        newUserRoles.forEach(nur => {
            this.userRoles.push(nur);
        })
    }
}

export const ACTUAL_USER_ROLES: UserRoles = new UserRoles();

function authorize(component: ReactNode, restrictedRoles: Array<BackendDto.IRoles>, userRoles: Array<BackendDto.IRoles>, showModalMessage: boolean): ReactNode {
    if (restrictedRoles.length !== 0) {
        let hasAccess: boolean = false;

        userRoles.forEach(ur => {
            if (restrictedRoles.includes(ur)) {
                hasAccess = true;
            }
        });

        if (hasAccess) {
            return component;
        } else {
            if (showModalMessage) {
                return <ModalMessageView variant={"danger"} title={"Invalid access"}
                                         message={"You do not have access for requested page"} showClose={false}/>
            } else {
                return <></>
            }
        }
    } else {
        return component;
    }
}

const Authorization = (component: ReactNode, restrictedRoles: Array<BackendDto.IRoles>, userRoles: Array<BackendDto.IRoles>, showModalMessage: boolean) => {
    return class WithAuthorization extends Component<Props, State> {
        render() {
            return authorize(component, restrictedRoles, userRoles, showModalMessage);
        }
    }
}

export const AuthorizationWithoutRender = (component: ReactNode, restrictedRoles: Array<BackendDto.IRoles>, showModalMessage: boolean) => {
    return Authorization(component, restrictedRoles, ACTUAL_USER_ROLES.userRoles, showModalMessage);
}

export const AuthorizationWithRender = (component: ReactNode, restrictedRoles: Array<BackendDto.IRoles>, showModalMessage: boolean) => {
    return authorize(component, restrictedRoles, ACTUAL_USER_ROLES.userRoles, showModalMessage);
}
