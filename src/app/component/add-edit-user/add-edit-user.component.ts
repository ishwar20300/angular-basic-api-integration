import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  
  public formData:any = {};
  public apiResponse:any = {};

  constructor(
    public dataService:BackendApiService,
    public router: Router,
    public route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((params) => {
      if (params.userId) {
       this.getSingleUserData(params.userId);
      }
    });

  }

  ngOnInit(): void {
  }

  /***
   * GET USER DATA BY USER ID
   * 
   */
     getSingleUserData(id){
      this.dataService.get('api/users/'+id).subscribe(response => {
        this.apiResponse = response
        this.formData = this.apiResponse.data;
      })
  }



  submit(){

    //IF id is present in formData object then call update api else call add new user api
    if(this.formData.id){

    }else{
      this.addNewUser();
    }
    
  }


  //ADD NEW USER

  addNewUser(){
    this.dataService.post(this.formData,'api/users').subscribe(response => {
      this.apiResponse = response
      this.router.navigate(['/home']);
    })
  }

  //EDIT USER

  
  updateUser(){
    this.dataService.put(this.formData,'/users/'+this.formData.id).subscribe(response => {
      this.apiResponse = response
      this.router.navigate(['/home']);
    })
  }

}
