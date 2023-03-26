import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machinecomponent',
  templateUrl: './machinecomponent.component.html',
  styleUrls: ['./machinecomponent.component.css']
})
export class MachinecomponentComponent implements OnInit {

  mac_no:any;
  details:any;

  constructor(private route:ActivatedRoute) {

    this.route.paramMap.subscribe(res=>{
      this.mac_no=res.get('id');
      console.log(this.mac_no, "retrived mac no");
    })

    

   }

  ngOnInit(): void {
  }

  print(){
    window.print();
  }

}
