import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isRegister = false;
  isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }
login(){
this.isLogin = !this.isLogin;
this.isRegister = false;
}
register(){
this.isRegister = !this.isRegister;
this.isLogin = false;
}
cancelReg(){
  this.isRegister = !this.isRegister;
}
cancelLog(){
  this.isLogin = !this.isLogin;
}
}
