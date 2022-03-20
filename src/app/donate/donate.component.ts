import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor( private apiService:ApiService) { }
  donateForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    age: new FormControl(null,[Validators.required,Validators.min(18)]),
    bloodgroup: new FormControl(null,Validators.required),
    contactnumber: new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    alternatecontact: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    state: new FormControl(null,Validators.required),
    district : new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required)
  })
  bloodGroups = ['A+','A-','B+','B-','O+','O-','AB+','AB-']
  ngOnInit(): void {
  }
  submitDonateForm() {
    this.apiService.uploadBloodDonations(this.donateForm.value).subscribe(
      res=>{
        window.alert("Submitted Successfully");
        this.donateForm.reset();
      },
      err=>{
        console.log(err);
      }
    )
  }
}
