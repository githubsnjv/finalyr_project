import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DashserviceService {

  constructor(private afs:AngularFirestore,private rfs:AngularFireDatabase) { }

  //receiving the job -- input<< job number >> 

  receive_job(job_num:any){
    return this.afs.collection("SVK").doc("data").collection("job").doc(job_num).valueChanges();
    };

  
  // receive the ew job number to allocate
  receive_new_job_number(){
   return this.afs.collection("SVK").doc("data").collection("count").doc("job_count").valueChanges()
   }

  //  update the job with job number
  upload_job(job_num:string,job_details:any){
    this.afs.collection("SVK").doc("data").collection("job").doc(job_num).set(job_details);
  }

  job_count_update(count:any){
    this.afs.collection("SVK").doc("data").collection("count").doc("job_count").set({"c":count.toString()});
  }
    
  receive_mac(mac:any){
    return this.afs.collection("SVK").doc("data").collection("mac").doc(mac).valueChanges();
  }
}


