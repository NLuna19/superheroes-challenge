import { Component, OnInit, Input } from '@angular/core';
import { ImportsNotUsedAsValues } from 'typescript';

@Component({
  selector: 'app-hipervinculo',
  templateUrl: './hipervinculo.component.html',
  styleUrls: ['./hipervinculo.component.css']
})
export class HipervinculoComponent implements OnInit {

  @Input() id!:string;
  @Input() content!:string;
  @Input() route!:string;
  @Input() class?:string;
  @Input() classActive?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
