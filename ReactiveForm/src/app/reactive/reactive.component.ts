import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  reactiveForm! :FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup ({
      name:new FormControl(null,Validators.required),
      id:new FormControl(null,[Validators.min(1),Validators.required]),
      address:new FormControl(null),

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
  onConfim()
  {
    if (this.reactiveForm.valid)
    {
      // this.resetForm();
      this.reactiveForm.reset();
      console.log('That is great, All Set');
    }
    else{
      alert('There is Something Wrong!');

    }
    console.log(this.reactiveForm)

  }


}
