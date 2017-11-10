import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListActions } from './list/state/list.actions';
import { listview } from './list/state/list.reducer';
import { AppStoreModule } from './modules/app-store/index';
import { ListViewService } from './list/state/list.service';
import { ListEffects } from './list/state/list.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './dts/datatransaction.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('list', listview),
    EffectsModule.forFeature([ListEffects]),
    AppStoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ListActions, ListViewService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
