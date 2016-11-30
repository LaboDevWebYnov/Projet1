import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../shared/services/user.service';
import { Http, HttpModule } from "@angular/Http";
import { Configuration } from '../../../../shared/app.constants';
import { ChangePasswordObject } from '../../../../shared/models/utils/change-password-object';
import { ChangeEmailObject } from '../../../../shared/models/utils/change-email-object';
import { User } from '../../../../shared/models/user';
import { Address } from '../../../../shared/models/address';

@Component({
  selector: 'app-test-user-service',
  templateUrl: './test-user-service.component.html',
  styleUrls: ['./test-user-service.component.css'],
  providers: [UserService,Configuration]
})
export class TestUserServiceComponent implements OnInit {

  usersApiJson: Object;
  userGetById: Object;
  userGetByUsername: Object;

  ChangeUserPassword : ChangePasswordObject={
    oldPassword:"string",
    newPassword: "test",
    newPasswordConfirmation: "test"
  };

  ChangeUserEmail : ChangeEmailObject={
    email: "string"
  };

  address1: Address= {
    postCode: 0,
    city: "string",
    country: "string",
    line: "string"
  };

  friends: User[];

  UpdateUser : User={
    firstname: "ya",
    lastname: "yo",
    username: "yu",
    birthDate: "1998-11-27",
    email: "aaaa@e.com",
    password: "mdp",
    avatar: "string",
    address: this.address1,
    phoneNumber: "string",
    admin: true,
    friends: this.friends,
    interests: "test",
    active: true,
    created_at: "2016-11-27",
    updated_at: "2016-11-27"
  };

  AddNewUser : User; /*={
    firstname: "ya",
    lastname: "yo",
    username: "yu",
    birthDate: "1998-11-27",
    email: "aaaa@e.com",
    password: "mdp",
    avatar: "string",
    address: address1: Address,
    phoneNumber: "string",
    admin: true,
    friends: [
      {}
    ],
    active: true,
    created_at: "2016-11-27",
    updated_at: "2016-11-27"
  };*/

  constructor(private userServiceInstance: UserService) { }

  private getAllItemsUser(): void {
    this.userServiceInstance
      .GetAllUsers()
      .subscribe(
        data => this.usersApiJson = data,
        error => console.log(error),
        () => console.log(this.usersApiJson)//console.log('get All Items complete')
      );
  }


  private getItemUserById(id: string): void {
    this.userServiceInstance
      .GetSingleUserById(id)
      .subscribe(
        data => this.userGetById = data,
        error => console.log(error),
        () => console.log(this.userGetById)//console.log('get All Items complete')
      );
  }


  private getItemUserByUsername(): void {
    this.userServiceInstance
      .GetSingleUserByUsername("jimmydu69")
      .subscribe(
        data => this.userGetByUsername = data,
        error => console.log(error),
        () => console.log(this.userGetByUsername)//console.log('get All Items complete')
      );
  }

  private ChangeUserInfo(): void {
    this.userServiceInstance
      .ChangeUserInformation("5839a90d79de070f701d97d3",this.UpdateUser)
      .subscribe(
        error => console.log(this.ChangeUserPassword),
      );
  }

  private ChangePassword(): void {
    this.userServiceInstance
      .ChangeUserPassword("5839a90d79de070f701d97d3",this.ChangeUserPassword)
      .subscribe(
        error => console.log(this.ChangeUserPassword),
      );
  }

  private ChangeEmail(): void {
    this.userServiceInstance
      .ChangeUserEmail("5839a90d79de070f701d97d3",this.ChangeUserEmail)
      .subscribe(
        error => console.log(this.ChangeUserEmail),
      );
  }

  private addUser(): void {
    this.userServiceInstance
     .AddUser(this.AddNewUser)
     .subscribe(
     error => console.log(JSON.stringify(this.AddNewUser)),
     );
  }

  private deleteUser(): void {
    this.userServiceInstance
      .Delete("5839a90d79de070f701d97d3")
      .subscribe(
        error => console.log(error),
      );
  }

  ngOnInit() {
    this.getAllItemsUser();
  }

}
