import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../services/apiservice.service'
import {ApiInfo} from '../../../shared/api-interface'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList: ApiInfo[] = [] ;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getProduct()
    .subscribe(res =>{
      this.productList = res
      console.log(this.productList);

    })
  }

}
