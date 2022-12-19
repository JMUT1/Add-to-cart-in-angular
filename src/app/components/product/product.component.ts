import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../services/apiservice.service'
import {ApiInfo} from '../../../shared/api-interface'
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList: ApiInfo[] = [] ;

  constructor(private apiService: ApiserviceService, private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.apiService.getProduct()
    .subscribe(res =>{
      this.productList = res
      console.log(this.productList);

      // ADDING QUANTITY TO THE PRODUCT LIST, CUZ API DONT HAVE THAT INFORMATION

      this.productList.forEach((a: ApiInfo)=>{
        Object.assign(a, {quantity: 1, total: a.price})
      })
    })}

    addToCart(item: ApiInfo){
      this.cartService.addToCart(item)
    }

}
