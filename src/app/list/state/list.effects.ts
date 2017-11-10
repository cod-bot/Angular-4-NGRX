import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { Store } from '@ngrx/store';

import { ListActions } from './list.actions';
import { error} from '../../modules/app-store/state/app-store.effects';
import { IAction } from '../../modules/app-store/interfaces/IAction';
import { IAppStoreState } from '../../modules/app-store/state/app-store.reducer';
import { DataService } from '../../dts/datatransaction.service';


@Injectable()
export class ListEffects {

    @Effect()
    egetCount = this.action$
        .ofType(ListActions.GET_COUNT)
        .switchMap((pAction: IAction) => {
          return  this.dts.getUser().switchMap((result: any) => {
              console.log(result);
             return Observable.empty();
            });
        });

    constructor(
        private action$: Actions,
        public store: Store<IAppStoreState>,
        public list: ListActions,
        public dts: DataService
    ) {}
}
