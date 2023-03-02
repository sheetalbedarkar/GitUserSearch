import { Component, OnInit } from '@angular/core';
import { FpRepositoryServiceService } from "../../service/fp-repository-service.service";

@Component({
  selector: 'app-fp-home',
  templateUrl: './fp-home.component.html',
  styleUrls: ['./fp-home.component.scss']
})
export class FpHomeComponent implements OnInit {
  activeNavLnk: number = 1;
  allGitUsers: any;
  searchText: any = '';
  showSearchList: Boolean = false;

  constructor(public service: FpRepositoryServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.allGitUsers = this.service.getSearchedUsers();    
  }

  searchClick() {
    this.showSearchList = true;    
  }

  searchReset() {
    this.showSearchList = false;
  }
}
