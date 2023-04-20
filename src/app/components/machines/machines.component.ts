import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute } from '@angular/router';
import { DashserviceService } from 'src/app/dashservice.service';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit{

  res:any;
  mac_id:any;
  job_details:any;

  constructor(private data:CrudService, private route: ActivatedRoute,private ser:DashserviceService) {

     //get the route data 

     this.route.paramMap.subscribe(params => {
       this.mac_id=params.get('id');

      
        })
   

   // receive the particular machine data

    
  }



   ngOnInit(): void {

    this.jobReceiver();

  //   this.data.retrive(this.mac_id).subscribe(res=>{
  //     this.res=res;
  //     console.log(res,"retrived vaLUE PARTICULAR ID");
  //   })
   
  // }
   }


   jobReceiver(){
    this.ser.receive_job("1").subscribe(res=>{
      this.job_details=res;
      console.log(this.job_details);
    })
   }


  }
