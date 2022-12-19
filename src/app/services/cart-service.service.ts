import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
public cartItemList : any = []

public productList = new BehaviorSubject<any>([])


  constructor() { }

  getProducts(){
   return this.productList.asObservable()
  }

  setProduct (product : any){
    this.cartItemList.push(...product)
    this.productList.next(product)
  }

  addToCart (product:any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice()
  }

  getTotalPrice(){
    let granTotal = 0
    this.cartItemList.map((a:any)=>{
      granTotal+= a.total
    })
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index: any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index, 1)
      }
    })
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
