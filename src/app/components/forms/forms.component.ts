import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';
import { FormBuilder } from '@angular/forms';
import { take,map } from 'rxjs';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  
  machine_count:number;
  arr:any=[];
  profileForm:FormGroup<any>
  formValue:any;
 i:any;
 
  
  
  constructor(private data: CrudService,private fb:FormBuilder) {

    //get the total number of machine counts and add it into the spinner

    this.data.machine_count().pipe(take(1),map((res:any)=>{
      return res.counts;
    })).subscribe(rs=>{
      this.machine_count=rs;
      console.log(this.machine_count)
      for(this.i=1;this.i<=this.machine_count;this.i++){
        this.arr.push(this.i)
  }
      
    })

    
  }

  

  ngOnInit() {
    this.profileForm = this.fb.group({
      yarnname: ['',Validators.required],
      quantity: [''],
      counts: [''],
      colour: [''],
      weight: [''],
      received_date: [''],
      dia:[''],
      gg:[''],
      mac_no:['']
     
    });
  }


  sub() {  
    
    
    this.data.machineAllotment(this.profileForm.value)
   
  }

}
