import { Customer } from './../customers/customer';
import { Component, OnInit, OnChanges } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import formgroup , form controller, formBuilder
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-way-build-form',
  templateUrl: './reactive-way-build-form.component.html',
  styleUrls: ['./reactive-way-build-form.component.css']
})
export class ReactiveWayBuildFormComponent implements OnInit {
  customerReactiveFormApproach: FormGroup;

  // backend comming data model
  customer = new Customer();

  disableIn = true;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {

    // This FormBuilder is help us to simplyfy the code and make more readable help to do validation more
    /* no need to add {firstName :new FormControl()} => keyword */
    this.customerReactiveFormApproach = this.fb.group({
      firstName: '',
      lastName : '',
      emailId : '',
      SendCatalog : true
    });

    /* this is no need longer because we add formBuilder so it is doing this part of work well*/
    // this.customerReactiveFormApproach = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName : new FormControl(),
    //   emailId : new FormControl(),
    //   SendCatalog : new FormControl(true)
    // });
  }

  save() {
    console.log(this.customerReactiveFormApproach);
    console.log(JSON.stringify(this.customerReactiveFormApproach.value));
  }

  // patchValue not required all the formControl groups. anyway click to define a value to formControllers
  populatedata() {
    this.customerReactiveFormApproach.patchValue({
      firstName: 'Raheem',
      lastName: 'mohamed',
      SendCatalog : false

    });
  }
  // setValue require all the formControl groups for define the value
  setValue() {
    this.customerReactiveFormApproach.setValue({
      firstName: 'Raheem',
      lastName: 'mohamed',
      SendCatalog : false

    });
  }

  // enable diasble input field
  toggleEnables() {
    this.disableIn = !this.disableIn;
    console.log(this.disableIn);
  }


}
