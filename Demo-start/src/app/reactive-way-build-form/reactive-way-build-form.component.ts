import { Customer } from './../customers/customer';
import { Component, OnInit, OnChanges } from '@angular/core';
// import { NgForm, Validator, FormControl } from '@angular/forms';
// import formgroup , form controller, formBuilder
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';

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

  emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }
    if (emailControl.value === confirmControl.value) {
      return null;
    }
    return { 'match': true };
  }

  ngOnInit() {

    // This is FormBuilder with simplyfy the code and make validation with reactive Form Approach way
    /* this is include form validator with formBuilder */
    this.customerReactiveFormApproach = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName : ['', [Validators.required, Validators.maxLength(50)]],
      emailId : ['', [Validators.required, Validators.email]],
      phone : '',
      notification : '',
      SendCatalog : true
    });

    // This FormBuilder is help us to simplyfy the code and make more readable help to do validation more
    /* no need to add {firstName :new FormControl()} => keyword */
    /* This is without add validation in using form Builder */
    // this.customerReactiveFormApproach = this.fb.group({
    //   firstName: '',
    //   lastName : '',
    //   emailId : '',
    //   SendCatalog : true
    // });

    /* this is no need longer because we add formBuilder so it is doing this part of work well*/
    // this.customerReactiveFormApproach = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName : new FormControl(),
    //   emailId : new FormControl(),
    //   SendCatalog : new FormControl(true)
    // });
  }


  // runtime validator to check the text radio button is click phone no field is mandotory. when click
  // when click email phone number field is optional
  validateRadioButClick(incomeParam: string) {
    const phoneControl = this.customerReactiveFormApproach.controls['phone'];
    if (incomeParam ===  'text') {
      phoneControl.setValidators([Validators.required]);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();

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
