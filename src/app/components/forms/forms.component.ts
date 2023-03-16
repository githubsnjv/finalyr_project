import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  o: any;

  profileForm:FormGroup<any>
 
  
  constructor(private data: CrudService,private fb:FormBuilder) {}

  

  ngOnInit() {
    this.profileForm = this.fb.group({
      yarnname: ['',Validators.required],
      quantity: [''],
      counts: [''],
      colour: [''],
      weight: [''],
      received_date: [''],
      dia:[''],
      gg:['']
     
    });
  }


  sub() {


    // this.data.current_id().pipe(take(1)).subscribe(res => {

    //   this.o = res;
    //   console.log(this.o);

    // })


    // console.log(this.o)
    // this.data.current_id_add(this.o.id + 1);
    // console.log(this.o.id + 1);

    this.data.add_form_data(this.profileForm.value)
    console.log(this.profileForm.value)


  }

}
