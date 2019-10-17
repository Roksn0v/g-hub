import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-table',
  templateUrl: './scores-table.component.html',
  styleUrls: ['./scores-table.component.scss']
})
export class ScoresTableComponent implements OnInit {

  playersData = [
    {name: 'Player 1',
      scores:[3,8,10,15,20],
      total: 0
    },
    {name: 'Player 2',
    scores:[6,13,9,8,14],
    total: 0
  }
  ];
  reCalcTotals() {
    for (let p=0; p<this.playersData.length; p++ ) {
      this.playersData[p].total = 0;
      for ( let s=0; s<this.playersData[p].scores.length; s++) {
        this.playersData[p].total+=
        this.playersData[p].scores[s];
      }  
    }
  }

  constructor() { }

  ngOnInit() {
    this.reCalcTotals();
  }

}
