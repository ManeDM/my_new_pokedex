import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.burguer() 
  }

  burguer(){
  const btn =  document.querySelector('#menu-btn');
  const menu = document.querySelector('#sidemenu');
  btn?.addEventListener('click', i =>{
    menu?.classList.toggle("menu-expanded");
    menu?.classList.toggle("menu-collapsed")

    document.querySelector('body')?.classList.toggle('body-collapsed');
    
  });
  }
  
}
