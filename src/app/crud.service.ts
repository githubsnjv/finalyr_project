import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs:AngularFirestore) { }

  add() {
    this.afs.collection("/final").doc("1").set({rpm:120});
    }

  retrive(){
    return this.afs.collection("/final").valueChanges();
  }

  //gets the current id no to create the job no
  current_id(){
    return this.afs.collection("/final").doc("current_id").valueChanges();
  }

  current_id_add(cur_id:number){
    this.afs.collection("/final").doc("current_id").set({id:cur_id});
  }

  add_form_data(o:any){
    this.afs.collection("/final").doc(this.afs.createId()).set(o);
  }

}
