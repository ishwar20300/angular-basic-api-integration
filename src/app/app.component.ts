import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BaseAPI';

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { 

    if(!localStorage.getItem('userData')){
      this.router.navigate(['/']);
    }
  }

}
