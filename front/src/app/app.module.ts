import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { TestUserServiceComponent } from './component/test_service_component/test-user-service/test-user-service.component';
import { TestTeamServiceComponent } from './component/test_service_component/test-team-service/test-team-service.component';
import { TestSecurityServiceComponent } from './component/test_service_component/test-security-service/test-security-service.component';

@NgModule({
  declarations: [
    AppComponent,
    TestUserServiceComponent,
    TestTeamServiceComponent,
    TestSecurityServiceComponent
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
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
