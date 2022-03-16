import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findblood',
  templateUrl: './findblood.component.html',
  styleUrls: ['./findblood.component.css']
})
export class FindbloodComponent implements OnInit {
  bloodGroup: string = 'No Blood group selected';
  selectedState: any = 'Select State';
  selectedDistrict: any = 'Select District';
  selectedCity: any = 'Select City';


  constructor() { }

  ngOnInit(): void {
  }
  updateBloodGroup(bloodgroup:string){
    this.bloodGroup=bloodgroup;
  }

}
