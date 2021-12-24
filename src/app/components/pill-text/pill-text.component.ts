import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-text',
  templateUrl: './pill-text.component.html',
  styleUrls: ['./pill-text.component.css']
})
export class PillTextComponent implements OnInit {
  @Input()title!: string;
  @Input()text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
