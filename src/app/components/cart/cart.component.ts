import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ApiInfo } from 'src/shared/api-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: ApiInfo[] = []
  public granTotal !: number

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
      this.granTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(item: ApiInfo){
    this.cartService.removeCartItem(item)
  }

  emptyCart(){
    this.cartService.removeAllCart()

  }

}
