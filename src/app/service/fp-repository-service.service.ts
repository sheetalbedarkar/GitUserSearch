import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FpRepositoryServiceService {

  constructor() { }

  getSearchedUsers() {
    let users = [
      {
        name: "Sheetal Bedarkar",
        profile: "../../assets/images/userProfiles/sheetal.png"
      }, {
        name: "John Doe",
        profile: "../../assets/images/userProfiles/user1.png"
      }, {
        name: "Alexa",
        profile: "../../assets/images/userProfiles/user2.png"
      }, {
        name: "Peter Fernandice",
        profile: "../../assets/images/userProfiles/sheetal.png"
      }
    ]
    return users;
  }
}
