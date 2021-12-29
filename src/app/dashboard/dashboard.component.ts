import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno = ""
  pswd = ""
  amount = ""

  acno1 = ""
  paswd = ""
  amountt = ""

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
  deposit() {

    var acno = this.acno
    var pswd = this.pswd
    var amount = this.amount

    let result = this.ds.deposit(acno, pswd, amount)

    if (result) {
      // alert(amount+ "credited to your account . Balance is"+ result )
      alert("your account is credited with" + amount + "balance is" + result)
    }

  }
  
  withdraw() {
    var acno = this.acno1
    var pswd = this.paswd
    var amount = this.amountt

    let result = this.ds.withdraw(acno, pswd, amount)

    if (result) {
      // alert(amount+ "credited to your account . Balance is"+ result )
      alert("your account is debited with" + amount + "balance is" + result)

    }
  }
}
