import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  o: any;
  constructor(private data: CrudService) {
    

  }

  ngOnInit(): void {
  }


  profileForm = new FormGroup({
    yarnname: new FormControl(''),
    quantity: new FormControl(''),
    counts: new FormControl(''),
    colour: new FormControl(''),
    weight: new FormControl(''),
    received_date: new FormControl(''),
    dia: new FormControl(''),
    gg: new FormControl('')

  });

  sub() {


    // this.data.current_id().pipe(take(1)).subscribe(res => {

    //   this.o = res;
    //   console.log(this.o);

    // })


    // console.log(this.o)
    // this.data.current_id_add(this.o.id + 1);
    // console.log(this.o.id + 1);

    this.data.add_form_data(this.profileForm.value)



  }

}
