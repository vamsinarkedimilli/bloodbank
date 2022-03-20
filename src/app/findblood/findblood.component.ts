import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {Person} from "../../models/dataModel";

@Component({
  selector: 'app-findblood',
  templateUrl: './findblood.component.html',
  styleUrls: ['./findblood.component.css']
})
export class FindbloodComponent implements OnInit {
  constructor(private apiService:ApiService) { }
  findBloodForm = new FormGroup({
    bloodgroup: new FormControl(null,Validators.required),
    state: new FormControl(null,Validators.required),
    district: new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required)
  })
  flag=0;
  returnedData:Person[] =[];
  ngOnInit(): void {
  }
  checkAvailability() {
    this.apiService.checkAvailability(this.findBloodForm.value).subscribe(
      res=>{
        if(res==="Doesn't Exists"){
          this.flag=1;
          return
        }
        res=JSON.parse(res);
        this.returnedData = res;
      },
      err=>{
        console.log(err);
      }
    )
  }
}
