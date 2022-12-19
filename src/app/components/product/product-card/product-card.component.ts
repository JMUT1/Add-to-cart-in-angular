import { Component, Input, OnInit } from '@angular/core';
import {ApiInfo} from '../../../../shared/api-interface'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() cardDetail: any

  constructor() { }

  ngOnInit(): void {
  }

}
