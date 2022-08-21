import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  //Assigning New variables 
  reactiveForm! :FormGroup; //New Object of FromGroup
  name!:string;
  id!:number;
  address!:string;

  constructor() { }

  ngOnInit(): void {
    //Initializing New FormGroup and three FormControls 
    this.reactiveForm = new FormGroup ({
      name:new FormControl('',Validators.required),
      id:new FormControl(0,[Validators.min(1),Validators.required]),
      address:new FormControl(''),

    });

  }
  resetForm()
  { this.reactiveForm.markAsUntouched();
    this.reactiveForm.setValue({
    name:'',
    id:null,
    address:''
    })
  } 
  

  
  //Posting Value to API through Service
  async onConfim()
  {
    if (this.reactiveForm.valid)
    {
      try{
        //Getting New values
      this.name=this.reactiveForm.value.name;
      this.id=this.reactiveForm.value.id;
      this.address=this.reactiveForm.value.address;
      console.log('That is great, All Set');
      //Used to Reset Form After Pressing Confirm Button but it can also be done by built-in reset()
      //Use these variables to Call Post Function from Services
      console.log(this.reactiveForm)
      this.resetForm();

      // this.reactiveForm.reset();

      }
      catch(error){
        console.log(error)

      }
      
    }
    //If user unnotice about there is something missing and confirm it this will show Alert!
    else{
      alert('There is Something Wrong!');

    }
    

  }


}
