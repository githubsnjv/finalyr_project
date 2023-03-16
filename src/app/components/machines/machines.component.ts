import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent{

  res:any;

  constructor(private data:CrudService) {

    this.data.retrive().subscribe(res=>{
      this.res=res;
      console.log(res);
    })

   }

}
