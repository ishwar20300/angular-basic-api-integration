import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public formData:any = {};
  public apiResponse:any;

  constructor(
    public dataService:BackendApiService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  /***
   *  registration API
   */

   goToRegistration(){
    this.dataService.post(this.formData,'api/register').subscribe(response => {
      this.apiResponse = response
      if(this.apiResponse.token){
        this.router.navigate(['']);
        alert("Registration successfull.....")    
      }else{
        alert(this.apiResponse.error)
      }
    })


   }


   /***
    * GO TO LOGIN
    * 
    */

    login(){
      this.router.navigate(['']);
    }

}
