import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {
  userList:any;
  usres: any;
  constructor(private loanServices:LoanService){
  this.userList=[];
  }

  ngOnInit(){
    this.getdata();
  }

  getdata(){
    this.loanServices.getDetials().subscribe((data:any) =>{
     this.userList= data;
    })
  }


  deleteEmployee(id:number){
    this.loanServices.deleteEmployee(id).subscribe({
     next: (res) =>{
    alert('The data deleted succesfully !');
    this.getdata();
     }
    })
  }

  //  //Delete
  //  onClick(data: any) {
  //   if (confirm('Are you sure you want to delete ?')) {
  //     this.loanServices.detete(data.id).subscribe((resp) => {
  //       this.getdata();
  //     });
  //   }

  //   console.log('onClick has been triger');
  // }
  // //Get data
  // getdata() {
  //   this.loanServices.users().subscribe((data) => {
  //     console.warn('data', data);
  //     this.usres = data;
  //   });
  // }

}
