import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClickFacebookLogo(): void {
    window.open('https://www.facebook.com/cdmx.in/', '_blank');
  }

}
