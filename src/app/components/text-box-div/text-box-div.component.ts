import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box-div',
  templateUrl: './text-box-div.component.html',
  styleUrls: ['./text-box-div.component.css']
})
export class TextBoxDivComponent implements OnInit {
  myInput: string;  
  constructor() { }

  ngOnInit() {
  }

}
