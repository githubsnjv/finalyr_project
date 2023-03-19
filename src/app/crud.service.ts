import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';

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

  machine_count(){
     return this.afs.collection("machine_details").doc("details").valueChanges();
  }

  machineAllotment(data:any){
    
    this.afs.collection("machines").doc(data.mac_no.toString()).set(data);
  }

  getmachines(){
    return this.afs.collection("machines").valueChanges();
  }

  job_number_retrival(){
    return this.afs.collection("machine_details").doc("job number").valueChanges();
  }

  job_number_addon(previous_job_num:number){
    return this.afs.collection("machine_details").doc("job number").set({"job_number":previous_job_num+1})
  }

  jobAllotment(data:any,jobId:any){
     this.afs.collection("jobs").doc(jobId.toString()).set(data);
  }

  getdocname(){
    return this.afs.collection("machines").snapshotChanges();
  }

}
