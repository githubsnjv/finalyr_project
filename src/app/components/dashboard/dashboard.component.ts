import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute } from '@angular/router';
import { DashserviceService } from 'src/app/dashservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  las = [];
  val: any
  id: any;
  paramsSub: any;


  constructor(private data: CrudService, private activatedRoute: ActivatedRoute,private ser:DashserviceService) {

    this.data.getdocname().subscribe(res => {
      console.log(res)
    })

 
  }



  ngOnInit(): void {

    
  

    this.data.getmachines().pipe(map((re: any) => {
      return re.map((rs: any) => {
        return rs.mac_no;
      });


    })).subscribe(res => {

      this.las = res;
      console.log(this.las);
    })
  }


  ngOnDestroy(): void {

  }

  cardshow(num: any) {
    console.log(num);

  }

  receive(){
    this.ser.receive_job("1")
    
  }

}



