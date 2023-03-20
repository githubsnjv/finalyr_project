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

  constructor(private data:CrudService, private route: ActivatedRoute) {

     //get the route data 

     this.route.paramMap.subscribe(params => {
      console.log(params.get('id'),"from mach component")
      this.mac_id=params.get('id');

      
        })
   

   // receive the particular machine data

    

    

   }

   ngOnInit(): void {

    this.data.retrive(this.mac_id).subscribe(res=>{
      this.res=res;
      console.log(res,"retrived vaLUE PARTICULAR ID");
    })
   
  }
  }
