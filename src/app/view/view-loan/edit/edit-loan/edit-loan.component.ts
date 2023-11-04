import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {


  data :any;
  constructor(  private router: ActivatedRoute, private service: LoanService){}

  ngOnInit(): void {
this.gettingData();
  }

  // ID: any = this.router.snapshot.params['id'];

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
  loanData: any;



  registerfn(){
    this.loanData.saveUser(this.registerForm.value).subscribe((resp: any) => {
      console.log(resp);
      alert('Form Succesfully Submited');


    });

  }

  //After clicking loan
   toCheckLoanType(){
     if(this.registerForm.controls.loan.value=="Home Loan"){
       this.isLoan=true;
    }
     else{
     this.isLoan=false;
     }
     if(this.registerForm.controls.loan.value=="Personal Loan"){
     this.pLoan=true;
     }
     else{
       this.pLoan=false;
   }
   }
  ID:any=this.router.snapshot.paramMap.get('id');

  //  ID:any=this.router.snapshot.params.id;
   gettingData() {
    this.service.getCurrentUpdate(this.ID).subscribe((resp:any) => {
    this.registerForm = new  FormGroup({
    //  name : new FormControl(resp['name']),
     name: new FormControl(resp['name']),
    email: new FormControl(resp['email']),
    number: new FormControl(resp['number']),
    nationality: new FormControl(resp['nationality']),
    gender: new FormControl(resp['gender']),
    date: new FormControl(resp['date']),
    age: new FormControl(resp['age']),
    card: new FormControl(resp['card']),
    adders: new FormControl(resp['adders']),
    loan: new FormControl(resp['loan']),

   //Personal loan
    company: new FormControl(resp['company']),
    experience: new FormControl(resp['experience']),
    salary: new FormControl(resp['salary']),
    emi: new FormControl(resp['emi']),
    amount: new FormControl(resp['amount']),
    duration: new FormControl(resp['duration']),

    //Home loan
    property: new FormControl(resp['property']),
    builder: new FormControl(resp['builder']),
    value: new FormControl(resp['value']),
    salaryH: new FormControl(resp['salaryH']),
    loanH: new FormControl(resp['loanH']),
    durationH: new FormControl(resp['durationH']),
    })

   })
 }
 updatingData(){
  this.service.editData(this.registerForm.value,this.ID).subscribe((resp:any)=> {
    console.log(resp);
    alert("Data updated succesfully")
    location.assign('/reactive')
  })
}
}

