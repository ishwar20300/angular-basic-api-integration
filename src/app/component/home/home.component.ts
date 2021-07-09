import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public apiResponse:any;
  public list:any = [];

  constructor(
    public dataService:BackendApiService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }



  /***
   * GET ALL EMPLOYEE LIST
   * AUTHOR: ISHWAR BATHE
   */
  getAllEmployee(){
      this.dataService.get('api/users?page=1').subscribe(response => {
        this.apiResponse = response
        this.list = this.apiResponse.data;
      })
  }


  /***
   * DELETE USER BY USER ID
   * 
   */

   delete(id){
    this.dataService.delete('api/users/'+id).subscribe(response => {
      this.getAllEmployee();
    })
   }



   /**
    * GO TO CREATE USER PAGE
    * 
    */

     goToCreateUser(){
      this.router.navigate(['/add-edit-user']);
     }


     /***
      * GO TO EIDT USER PAGE AND PASS USER ID WITH ROUTER LINK
      * 
      */

      editUser(id){
        this.router.navigate(['/add-edit-user'],{queryParams:{userId:id}});
      }

}
