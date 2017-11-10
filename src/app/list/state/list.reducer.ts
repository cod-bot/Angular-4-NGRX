import * as _ from 'lodash';
import { Action } from '@ngrx/store';

import { ListActions } from './list.actions';
import { IAction } from '../../modules/app-store/interfaces/IAction';


/** Interface and Initial State */
export interface IlistState {
    data: string;

}


export const DEFAULT_LIST_STATE = {
    data: ''
};


/** Reducer */
export function listview(state: IlistState = DEFAULT_LIST_STATE, action: IAction): IlistState {

    switch (action.type) {

        case ListActions.GET_COUNT:
           return handleActionCount(state, action);
        default:
            return state;
    }

}


/** Reducer Handlers */

function handleActionCount(state: IlistState, action: IAction): IlistState {
    const newState = _.cloneDeep(state);
    console.log(action.payload);
    newState.data = action.payload;
    return newState;
}

