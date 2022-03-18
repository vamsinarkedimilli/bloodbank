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
    contactnumber: new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    alternatecontact: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  })
  bloodGroup!:string;
  selectedState:string = 'Select State';
  selectedDistrict:string='Select District';
  selectedCity:string='Select City'
  location!:string;
  ngOnInit(): void {
  }

  updateBloodGroup(bloodGroup:string) {
    this.bloodGroup=bloodGroup;
  }

  submitDonateForm() {
    this.apiService.uploadBloodDonations(this.donateForm.value).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }
}
