import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-projects-two',
  templateUrl: './menu-projects-two.component.html',
  styleUrls: ['./menu-projects-two.component.css']
})
export class MenuProjectsTwoComponent implements OnInit {


  @Input() menu1: any;

  constructor(private location: Location, ) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back()
  }
}

