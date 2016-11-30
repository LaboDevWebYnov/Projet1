/*
import { Component, OnInit } from '@angular/core';

import { PlayerAccountService } from '../../../../shared/services/player-account.service';
import { User } from '../../../../shared/models/user';
import { Address } from '../../../../shared/models/address';
import { PlayerAccount } from '../../../../shared/models/player-account';

@Component({
  selector: 'app-test-player-account-service',
  templateUrl: './test-player-account-service.component.html',
  styleUrls: ['./test-player-account-service.component.css']
})
export class TestPlayerAccountServiceComponent implements OnInit {

  playerAccountApiJson: Object;

  constructor(private playerAccountServiceInstance: PlayerAccountService) {}

  private getAllItemsPlayerAccount(): void {
    this.playerAccountServiceInstance
      .GetAllPlayerAccount()
      .subscribe(
        data => this.playerAccountApiJson = data,
        error => console.log(error),
        () => console.log('get All Items complete', this.playerAccountApiJson)
      );
  }
  ngOnInit() {
    this.getAllItemsPlayerAccount();
  }

}
 */
