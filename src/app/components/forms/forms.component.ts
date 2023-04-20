import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';
import { FormBuilder } from '@angular/forms';
import { take,map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DashserviceService } from 'src/app/dashservice.service';



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
 job_number:number;
 new_job_number:any
 num:number;
 
  
  
  constructor(private data: CrudService,private fb:FormBuilder,private route:Router,private ser:DashserviceService) {

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

  //form reset

  formReset(){
    this.profileForm.reset();
  }

  sub() {  
    // //retrives the job_num
    // this.data.job_number_retrival().pipe(take(1)).subscribe((res:any)=>{
    //   this.job_number=res.job_number
    //   console.log(this.job_number)
      
    //   //ADD THE JOB_NUMBER BY ONE
    //   this.data.job_number_addon(this.job_number).then(()=>{
    //     console.log("value updated!")
    //   })


    //   //job allotment ot machine and machine number
      
    //     this.data.machineAllotment(this.profileForm.value);
    //     this.data.jobAllotment(this.profileForm.value,this.job_number);
    //     //add the job no to the machine
    //     this.data.job_id_to_machine(this.profileForm.value,this.job_number)


      this.ser.receive_new_job_number().subscribe((res:any)=>{
        this.new_job_number=res.c.toString();
      })

      // update the data to DB
      this.num=Number(this.new_job_number)
      this.new_job_number=this.num+1;
      this.ser.upload_job("2",this.profileForm.value)
      console.log(this.num,typeof(this.new_job_number))
       
      // this.formReset();
      this.route.navigateByUrl("/dash")
      
 

    

  }
}

