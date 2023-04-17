import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-yarn-inward',
  templateUrl: './yarn-inward.component.html',
  styleUrls: ['./yarn-inward.component.css']
})
export class YarnInwardComponent implements OnInit {
  yarnInward = new FormGroup({
    yarnname : new FormControl(''),
    yarncount : new FormControl(''),
    no_of_bags  : new FormControl(''),
    no_of_halfbags : new FormControl(''),
    bags_in_kgs : new FormControl(''),
    received_date : new FormControl(''),
    vehicle_no : new FormControl(''),
    mill : new FormControl(''),
    company : new FormControl(''),

  });

  onSubmit(){
    console.log(this.yarnInward.value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
