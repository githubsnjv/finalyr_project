import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-fabricdelivery',
  templateUrl: './fabricdelivery.component.html',
  styleUrls: ['./fabricdelivery.component.css']
})
export class FabricdeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fabDelivery=new FormGroup({
    fab_name:new FormControl(''),
    order_number:new FormControl(''),
    number_of_rolls:new FormControl(''),
    total_weight:new FormControl(''),
    company_name:new FormControl(''),
    vehicle_number:new FormControl(''),
    to_dying_company_name:new FormControl(''),
    GG:new FormControl(''),
    diameter:new FormControl(''),
    GSM:new FormControl(''),
    Remarks:new FormControl(''),
    dc_number:new FormControl(''),
    date_of_delivery:new FormControl('')


  })

  onSubmit(){
    console.log(this.fabDelivery.value);
    

  }

}