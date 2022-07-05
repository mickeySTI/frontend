import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css']
})
export class LinkButtonComponent implements OnInit {

  @Input() btnStyle : 'primary' | 'danger' | 'success' = 'primary';
  @Input() btnSize: 'sm' | 'md' | 'lg' = 'md';
  @Output()  btnClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  tellPapa(){
    console.log("tellPapa called in the link button component");
    this.btnClicked.emit('This from the link button')
  }

}
