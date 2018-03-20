import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  positions: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/rest/position/getAllPositions').subscribe(data => this.positions = data);
  }

}
