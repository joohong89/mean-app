import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {TradePosition} from '../../model/position';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {

  // position = new TradePosition('', 0 , '', 0 , 0 , '' , '' , 0);
  types = ['Long', 'Short'];
  position = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    const _id = this.route.snapshot.params['id'];
    this.http.get('/rest/position/' + _id).subscribe(data => {
      this.position = data;
    });
  }

}
