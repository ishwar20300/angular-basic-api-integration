import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
   * Navigate to registration Page
   */

   goToRegistration(){
    this.router.navigate(['/registration']);
   }


   /***
    * LOGIN
    * 
    */

    login(){
      this.dataService.post(this.formData,'api/login').subscribe(response => {
        this.apiResponse = response
        if(this.apiResponse.token){
          this.router.navigate(['/home']);
        }else{
          alert(this.apiResponse.error)
        }
      })
    }

}
