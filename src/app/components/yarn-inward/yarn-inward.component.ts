import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';


@Component({
  selector: 'app-yarn-inward',
  templateUrl: './yarn-inward.component.html',
  styleUrls: ['./yarn-inward.component.css']
})
export class YarnInwardComponent implements OnInit {
  yarnInward = new FormGroup({
    fab_name : new FormControl(''),
    order_number : new FormControl(''),
    number_of_rolls  : new FormControl(''),
    date_of_delivery : new FormControl(''),
    total_weight : new FormControl(''),
    company_name : new FormControl(''),
    vehicle_number : new FormControl(''),
    vehicle_no : new FormControl(''),
    mill : new FormControl(''),
    company : new FormControl(''),

  });

  onSubmit(){
    console.log(this.yarnInward.value);
    this.crud.yarninward(this.yarnInward.value);
    console.log("yarn inward updated!")
    this.yarnInward.reset;

  }


  constructor(private  crud:CrudService) { }

  ngOnInit(): void {
  }

}