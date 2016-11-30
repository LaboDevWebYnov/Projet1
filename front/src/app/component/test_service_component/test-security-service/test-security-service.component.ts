import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../../shared/services/security.service';

@Component({
  selector: 'app-test-security-service',
  templateUrl: './test-security-service.component.html',
  styleUrls: ['./test-security-service.component.css']
})
export class TestSecurityServiceComponent implements OnInit {

  constructor(private securityServiceInstance: SecurityService) { }

  private verifyEmail(): void {
    this.securityServiceInstance
      .verifyEmail()
      .subscribe(
        data => this.userGetById = data,
        error => console.log(error),
        () => console.log('get One Item complete',this.userGetById)//console.log('get All Items complete')
      );
  }

  ngOnInit() {
  }

}
