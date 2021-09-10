import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {

  @Input() name: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }

}
