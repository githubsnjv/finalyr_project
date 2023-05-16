import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-yarndelivery',
  templateUrl: './yarndelivery.component.html',
  styleUrls: ['./yarndelivery.component.css']
})
export class YarndeliveryComponent implements OnInit {

  yarnDelivery = new FormGroup({
    yarnname : new FormControl(''),
    yarncount : new FormControl(''),
    no_of_bags  : new FormControl(''),
    no_of_halfbags : new FormControl(''),
    half_bags_in_kgs : new FormControl(''),
    full_bags_in_kgs : new FormControl(''),
    delivered_date : new FormControl(''),
    delivery_vehicle_no : new FormControl(''),
    mill : new FormControl(''),
    company : new FormControl(''),

  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.yarnDelivery.value);
    

  }

}
