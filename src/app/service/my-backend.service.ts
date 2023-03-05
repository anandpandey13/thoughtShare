import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyBackendService {

  //this is our API to be called.
private baseUrl:String="https://62ff305c34344b6431f42115.mockapi.io";   //working 

  constructor(private httpVar:HttpClient) { }

sendData(data:any)
{
return this.httpVar.post(`${this.baseUrl}/anand`,data);
}

getData()
{
  return this.httpVar.get<any>(`${this.baseUrl}/anand`)
}

}
