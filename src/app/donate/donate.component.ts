import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor() { }
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
}
