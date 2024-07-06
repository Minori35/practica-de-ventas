import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor( private loadingSve: LoadingService, private router: Router){

    
  }


  ngOnInit(): void {
    this.loadingSve.show();
    setTimeout(() => {
      this.router.navigate(['/home']); // Your code to execute after 5 seconds
      this.loadingSve.hide();
    }, 5000); // 5000 milliseconds = 5 seconds
    
  }
}
