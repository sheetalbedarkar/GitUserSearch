import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-header',
  templateUrl: './fp-header.component.html',
  styleUrls: ['./fp-header.component.scss']
})
export class FpHeaderComponent implements OnInit {
  @Input() activeNavLnk: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
