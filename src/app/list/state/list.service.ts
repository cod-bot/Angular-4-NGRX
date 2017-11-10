import { Injectable, Injector } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as selector from './list.selectors';
import { IAppStoreState } from '../../modules/app-store/state/app-store.reducer';
import { ListActions } from './list.actions';

@Injectable()
export class ListViewService  {
    constructor(
        public store: Store<IAppStoreState>,
        public action: ListActions,
    ) {

    }

    dsendCount(pValue: string) {
         this.store.dispatch(this.action.getCount(pValue));
        }

    sGetCount() {
       return this.store.select(selector.getTotalCount);
    }
}
