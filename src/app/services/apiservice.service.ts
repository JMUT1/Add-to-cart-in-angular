import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"
import {ApiInfo} from '../../shared/api-interface'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  ApiUrl = "https://fakestoreapi.com/products"


  getProduct(){
    return this.http.get<ApiInfo[]>(this.ApiUrl)
    .pipe(map((res:ApiInfo[])=>{
      return res
    }) )
  }
}
