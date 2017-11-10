import { Component, OnInit } from '@angular/core';
import { ListViewService } from './state/list.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  form: FormGroup;
  dataCount$: Observable<string> ;

  constructor(public listSvc: ListViewService, fb: FormBuilder) {
      this.form = fb.group({
        'name': ['']
      });
  }

  ngOnInit() {
    this.dataCount$ = this.listSvc.sGetCount();
  }

  addPost(pValue: {name: string}) {
    this.listSvc.dsendCount(pValue.name);
    console.log(pValue);
  }

}
