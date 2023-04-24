import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit{

  res:any;
  mac_id:any;
  machines:any;
  rdb:any

  constructor(private data:CrudService, private route: ActivatedRoute) {

     //get the route data 

     this.route.paramMap.subscribe(params => {
      console.log(params.get('id'),"from mach component")
      this.mac_id=params.get('id');

      
        })
   

   // receive the particular machine data

    

    

   }

   ngOnInit(): void {

    this.data.mac_num_details(this.mac_id).subscribe(res=>{
      this.res=res;
      console.log(res,"retrived vaLUE PARTICULAR ID");
    })

    this.data.getmac_det().subscribe(r=>{
      this.machines=r;
      console.log(this.machines,"machine details")
    })

    this.data.rdb().subscribe((d:any)=>{
      this.rdb=d[0];
      console.log(d,"xxxxxxxxxxxxxxxxxxxxxxxxxx")
    })
   
  }
  }
