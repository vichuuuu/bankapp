import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: any = {
    1000: { acno: 1000, uname: "aswathy", pswd: "zero", balance: 6000 },
    1001: { acno: 1001, uname: "vishnu", pswd: "one", balance: 6000 },
    1002: { acno: 1002, uname: "ram", pswd: "two", balance: 8000 },
  }

  constructor() { }

  register(acno: any, pswd: any, uname: any) {

    let db = this.users

    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno, uname, pswd, balance: 0
      }
      return true
    }
  }


  login(acno: any, password: any) {

    let database = this.users

    if (acno in database) {
      if (password == database[acno]["pswd"]) {
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
  }

  deposit(acno: any, password: any, amt: any) {

    var amount = parseInt(amt)

    let db = this.users

    if (acno in db) {
      if (password == db[acno]["pswd"]) {
        db[acno]["balance"] = db[acno]["balance"] + amount
        return db[acno]["balance"]
      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("account does not exist")
      return false
    }
  }


  withdraw(acno: any, password: any, amt: any) {

    var amount = parseInt(amt)

    let db = this.users

    if (acno in db) {

      if (password == db[acno]["pswd"]) {

        if (db[acno]["balance"] > amount) {
          db[acno]["balance"] = db[acno]["balance"] - amount
          return db[acno]["balance"]
        }
         else {
          alert("insufficient balance")
          return false
        }


      } else {
        alert("incorrect password")
        return false
      }
    } else {
      alert("account doesnot exist...")
      return false
    }

  }

}
