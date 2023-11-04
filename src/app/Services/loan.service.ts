import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  url:string='http://localhost:3000/Coustomer';

  constructor(private http:HttpClient) { }

  getDetials(){
    return this.http.get(this.url)
  }

  saveUser(data:any){
    return this.http.post('http://localhost:3000/Coustomer',data)
  }

  //Delet function logic
  deleteEmployee(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/Coustomer/${id}`);
  }

  //Edit Appointment
  getCurrentUpdate(id: any)
  {
    return this.http.get(`${this.url}/${id}`);
  }

  editData(data: any, id: any)
  {
    return this.http.put(`${this.url}/${id}`,data);


  }


  
}
