import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-positions-details',
  templateUrl: './positions-details.component.html',
  styleUrls: ['./positions-details.component.css']
})
export class PositionsDetailsComponent implements OnInit {

  positionId: any;
  position: {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.positionId = this.route.snapshot.params['id'];

    this.http.get('/rest/position/' + this.positionId).subscribe(data => this.position = data);
  }

}
