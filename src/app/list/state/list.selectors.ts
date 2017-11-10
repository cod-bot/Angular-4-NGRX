import { IAppStoreState } from '../../modules/app-store/state/app-store.reducer';

export function getTotalCount(state: IAppStoreState) {
    const count = state.list.data;
    console.log(state);
    return count;
}
