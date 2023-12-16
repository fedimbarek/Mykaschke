import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor(private http :HttpClient) { }
  postElectronic(data : any){
    return this.http.post<any>("http://localhost:3000/productList/",data);
  }
  getElectronic(){
    return this.http.get<any>("http://localhost:3000/productList/");
  }
  deleteElectronic(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
  }
}
