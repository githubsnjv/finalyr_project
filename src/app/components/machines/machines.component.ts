import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase} from '@angular/fire/compat/database';


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
  max_count:any
  reset1:any

  constructor(private data:CrudService, private route: ActivatedRoute,private ang:AngularFireDatabase) {

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
      console.log(this.rdb,"xxxxxxxxxxxxxxxxxxxxxxxxxx")
    })
   
  }

  up(){
    const tutRef = this.ang.object('machine status/1');
    tutRef.update({ reset: Number(this.reset1)});
    tutRef.update({ maxcount: Number(this.max_count)});
    this.reset1='';
    this.max_count='';
  }
  

  }
