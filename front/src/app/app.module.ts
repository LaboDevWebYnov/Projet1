import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/Http';
import {RouterModule}   from '@angular/router';

import {AppComponent} from './app.component';
import {TestUserServiceComponent} from './component/test_service_component/test-user-service/test-user-service.component';
import {TestTeamServiceComponent} from './component/test_service_component/test-team-service/test-team-service.component';
import {TestSecurityServiceComponent} from './component/test_service_component/test-security-service/test-security-service.component';
import {TestPlayerAccountServiceComponent} from './component/test_service_component/test-player-account-service/test-player-account-service.component';
import { TestGameServiceComponent } from './component/test_service_component/test-game-service/test-game-service.component';
import { TestAddressServiceComponent } from './component/test_service_component/test-address-service/test-address-service.component';


@NgModule({
  declarations: [
    AppComponent,
    TestUserServiceComponent,
    TestTeamServiceComponent,
    TestGameServiceComponent,
    TestSecurityServiceComponent,
    TestPlayerAccountServiceComponent,
    TestAddressServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: TestUserServiceComponent
      },
      {
        path: 'teams',
        component: TestTeamServiceComponent
      },
      {
        path: 'auth',
        component: TestSecurityServiceComponent
      },
      {
        path: 'player-account',
        component: TestPlayerAccountServiceComponent
      },
      {
        path: 'game',
        component: TestGameServiceComponent
      },
      {
        path: 'address',
        component: TestAddressServiceComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
