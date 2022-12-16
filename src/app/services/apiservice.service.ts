import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"
import {ApiInfo} from '../../shared/api-interface'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }



  getProduct(){
    return this.http.get<ApiInfo[]>("https://fakestoreapi.com/products")
    .pipe(map((res:ApiInfo[])=>{
      return res
    }) )
  }
}
