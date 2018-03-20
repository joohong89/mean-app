import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TradePosition} from '../../model/position';

@Component({
  selector: 'app-position-create',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.css']
})
export class PositionCreateComponent implements OnInit {

  position = new TradePosition('', 0 , '', 0 , 0 , '' , '' , 0);
  types = ['Long', 'Short'];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  createPosition() {
    this.http.post('/rest/position/', this.position)
      .subscribe(res => {
        const _id = res['_id'];
        this.router.navigate(['positions-details/', _id]);
      }, err => {
        console.log(err);
      });
  }

  updateProfit($event) {
    let profit: number;
    profit = this.position.exit * this.position.unit - this.position.entry * this.position.unit;

    if (this.position.type === 'Long') {
      this.position.profit = profit;
    } else {
      this.position.profit = profit * -1;
    }
  }

}
