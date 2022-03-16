import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }
  donateForm = new FormGroup({
    name: new FormControl(null,Validators.required),
    age: new FormControl(null,Validators.required),
    contactnumber: new FormControl(null,Validators.required),
    alternatecontact: new FormControl(null,Validators.required)
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
    console.log(this.donateForm.value);
  }
}
