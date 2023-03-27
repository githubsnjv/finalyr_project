import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-job-allotment',
  templateUrl: './job-allotment.component.html',
  styleUrls: ['./job-allotment.component.css']
})
export class JobAllotmentComponent implements OnInit {

  joballotment:FormGroup<any>

  constructor(private fb:FormBuilder, private crud:CrudService) {

    this.joballotment=this.fb.group({
      empName:[''],
      mac_no:[''],
      shift:[''],
      date:[''],
    })

   }

  ngOnInit(): void {
    
  }

  submit(){
    console.log(this.joballotment.value)
    
    this.crud.dailyallotment_job(this.joballotment.value,this.joballotment.value);
    this.joballotment.reset();
    
  }

}
