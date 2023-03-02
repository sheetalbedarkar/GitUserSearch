import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-history',
  templateUrl: './fp-history.component.html',
  styleUrls: ['./fp-history.component.scss']
})
export class FpHistoryComponent implements OnInit {
  activeNavLnk: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
