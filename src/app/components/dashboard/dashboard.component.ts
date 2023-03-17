import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  las=[];
  val:any
  constructor(private data:CrudService) { }

  ngOnInit(): void {
   
    this.data.getmachines().pipe(map((re:any)=>{
      return re.map((rs:any)=>{
        return rs.mac_no;
      });
        
        
    })).subscribe(res=>{
     
      this.las=res;
      console.log(this.las,"kjshch");
    })
  }

  
  

}



