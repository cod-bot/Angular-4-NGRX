import { Injectable } from '@angular/core';
import { ActionCreatorFactory } from '../../modules/app-store/utils/action-creator.utils';


@Injectable()
export class ListActions {

    static GET_COUNT             = '[ListActions] GET_COUNT';
    static GET_DATA              = '[listActions] GET_DATA';

    getCount                     = ActionCreatorFactory.create!(ListActions.GET_COUNT);
    getData                      = ActionCreatorFactory.create!(ListActions.GET_DATA);
}
