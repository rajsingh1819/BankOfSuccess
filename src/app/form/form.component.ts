import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private loanData:LoanService){}
  integerRegex =/^\d+$/;
  emailRegex =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
  adharRegex =/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;


  isLoan:boolean=false; //calling  dropdown
  pLoan: boolean=false;


  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    number: new FormControl("",[Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.integerRegex)]),
    nationality: new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required, Validators.maxLength(152),Validators.pattern(this.adharRegex)]),
    age: new FormControl("",[Validators.required, Validators.maxLength(30),Validators.pattern(this.emailRegex)]),
    card: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    adders: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    loan: new FormControl("",[Validators.required, Validators.maxLength(40)]),

   //Personal loan
    company: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    experience: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    salary: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    emi: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    amount: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    duration: new FormControl("",[Validators.required, Validators.maxLength(40)]),

    //Home loan
    property: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    builder: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    value: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    salaryH: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    loanH: new FormControl("",[Validators.required, Validators.maxLength(40)]),
    durationH: new FormControl("",[Validators.required, Validators.maxLength(40)]),
  });

getControl(name:any) : AbstractControl | null {  //validation
return this.registerForm.get(name)
}

  registerfn(){
    this.loanData.saveUser(this.registerForm.value).subscribe((resp) => {
      console.log(resp);
      alert('Form Succesfully Submited');
      this.resetForm();
    });


  }

  //After clicking loan
  toCheckLoanType(){
    if(this.registerForm.controls.loan.value=="Home Loan"){
      this.isLoan=true;
    }
    else    if(this.registerForm.controls.loan.value=="Personal Loan"){
      this.pLoan=true;
    }
    if(this.registerForm.controls.loan.value=="Personal Loan"){
      this.pLoan=true;
    }
    else{
      this.pLoan=false;
    }
  }

  resetForm(){
    this.registerForm.reset();
  }

}
