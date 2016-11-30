import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { TestUserServiceComponent } from './component/test_service_component/test-user-service/test-user-service.component';
import { TestTeamServiceComponent } from './component/test_service_component/test-team-service/test-team-service.component';
import { TestGameServiceComponent } from './component/test_service_component/test-game-service/test-game-service.component';

@NgModule({
  declarations: [
    AppComponent,
    TestUserServiceComponent,
    TestTeamServiceComponent,
    TestGameServiceComponent
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
        path: 'game',
        component: TestGameServiceComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
