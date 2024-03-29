import { Router } from '@angular/router';
import { AuthService } from './../../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login'])
  }

}
