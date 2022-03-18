import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  uploadBloodDonations(bloodDonationData:FormGroup) : Observable<any>{
    console.log(bloodDonationData);
    return this.http.post('http://localhost/bloodbank/backend/blooddonations.php',bloodDonationData,{responseType:'text'});
  }
}
