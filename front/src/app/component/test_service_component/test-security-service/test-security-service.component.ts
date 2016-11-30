import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../../shared/services/security.service';

@Component({
  selector: 'app-test-security-service',
  templateUrl: './test-security-service.component.html',
  styleUrls: ['./test-security-service.component.css']
})
export class TestSecurityServiceComponent implements OnInit {

  // verifyEmail : string;

  constructor(private securityServiceInstance: SecurityService) { }

  // private verifyEmail(email:string): void {
  //   this.securityServiceInstance
  //     .verifyEmail(email)
  //     .subscribe(
  //       data => this.verifyEmail = data,
  //       error => console.log(error),
  //       () => console.log('get One Item complete',this.verifyEmail)//console.log('get All Items complete')
  //     );
  // }

  ngOnInit() {
    // this.verifyEmail();
  }

}
