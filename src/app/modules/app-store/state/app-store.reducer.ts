import * as fromRouter from '@ngrx/router-store';



export interface IAppStoreState {
    list: {
        data: string
    };
}

export const DEFAULT_APP_STORE_STATE = {};

/** Reducer */
export function appstore(state: any = DEFAULT_APP_STORE_STATE, action: any) {}


export const MainReducer = {
    routerReducer: fromRouter.routerReducer
    // appStore: appStore
};
