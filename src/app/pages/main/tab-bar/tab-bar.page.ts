import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.page.html',
  styleUrls: ['./tab-bar.page.scss'],
})
export class TabBarPage implements OnInit {

  constructor() { }
  @Input()activeOption:string="home";
  ngOnInit() {
  }

}
