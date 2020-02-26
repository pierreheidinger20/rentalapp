import { Component, OnInit, OnDestroy } from '@angular/core';
import { Rental, Payments, UserPayment } from '../rental.model';
import { UserRental } from '../users-rental/user-rental.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { FormControl, Validators, Form } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsersService } from '../users-rental/users.service';
import { RentalService } from '../rental.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit , OnDestroy{

  /**Model */
  rental:Rental = new Rental();
  users:UserRental[];

  usersSubscriptions:Subscription;

  /**Forms */
  txtNamePaymentRental:FormControl;
  txtCostPaymentRental:FormControl;
  
  txtNamePaymentOthers:FormControl;
  txtCostPaymentOthers:FormControl;

  calculated:boolean;

  monthNames:string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  constructor(public _dialogRef: MatDialogRef<RentalAddComponent>,
              private _store:Store<AppState>,
              private _userService:UsersService,
              private _rentalService:RentalService) { }

  ngOnInit(): void {
    this._userService.getUsers();
    this.usersSubscriptions = this._store.select('usersRental').subscribe(users => this.users = users);
    this.initData();
    this.initForms();
  };
  ngOnDestroy(): void{
    this.usersSubscriptions.unsubscribe();
  };

  newRentalPayment()
  {
    if(this.txtNamePaymentRental.invalid) {
      Swal.fire('Alert',`name is requerid`,'warning') 
      return;
    }
    if(this.txtCostPaymentRental.invalid) {
      Swal.fire('Alert',`cost is requerid`,'warning') 
      return;
    }
      
    let paymentRental = new Payments();
    paymentRental.name = this.txtNamePaymentRental.value;
    paymentRental.cost = this.txtCostPaymentRental.value;

    this.rental.rentalPayments.push(paymentRental);

    this.txtNamePaymentRental.reset('');
    this.txtCostPaymentRental.reset(0)

    this.rental.fullPaymentRental = this.calculateFullPayment(this.rental.rentalPayments);
    
  };
  newRentalOthers()
  {
    if(this.txtNamePaymentOthers.invalid) {
      Swal.fire('Alert',`name is requerid`,'warning') 
      return;
    };
    if(this.txtCostPaymentOthers.invalid) {
      Swal.fire('Alert',`cost is requerid`,'warning') 
      return;
    };
      
    let paymentOther = new Payments();
    paymentOther.name = this.txtNamePaymentOthers.value;
    paymentOther.cost = this.txtCostPaymentOthers.value;

    this.rental.otherPayments.push(paymentOther);

    this.txtNamePaymentOthers.reset('');
    this.txtCostPaymentOthers.reset(0)

    this.rental.fullPaymentsOthers = this.calculateFullPayment(this.rental.otherPayments);
    
  };
  calculatePayment()
  {
    if(!this.validate())return;

    let countUsers = this.users.length;

    for(let user of this.users){

      let paymentRental = Math.round(this.rental.fullPaymentRental * (user.porcentual/100));
      let paymentOthers = Math.round(this.rental.fullPaymentsOthers / countUsers);

      let userPayment = new UserPayment();
      userPayment.name = user.name;
      userPayment.payment = paymentRental + paymentOthers;

      this.rental.usersPayments.push(userPayment);
    }
    this.calculated = true;
  };

  clean()
  {
    this.rental = new Rental();
    this.initData();
    this.calculated = false;
  }

  async save()
  {
    if(!this.validate())return;

    if(!this.calculated){
      Swal.fire('Alert',`not calculated`,'error') 
      return;
    }

    this.rental.registerDate = new Date();

    this._rentalService.addRental(this.rental)
                        .then(result =>{

                          Swal.fire('Success',`Saved`,'success') 

                          this._dialogRef.close();

                        }).catch(erro => Swal.fire(erro.message,erro.message,'error'));
  }
  private validate():boolean
  {
    let result = true;

    if(this.users.length == 0)
    {
      Swal.fire('Alert',`users missing`,'error') 
      result = false;
    };
    if(this.rental.rentalPayments.length == 0)
    {
      Swal.fire('Alert',`An income is necessary`,'error') 
      result = false;
    };
    if(this.rental.otherPayments.length == 0)
    {
      Swal.fire('Alert',`An income (others) is necessary`,'error') 
      result = false;
    };

    return result;
  };
  private getNameMonth(){
    return this.monthNames[new Date().getMonth()];
  };
  private initData(){
    this.rental.name = this.getNameMonth();
    this.rental.year = new Date().getFullYear();
    this.rental.month = new Date().getMonth() + 1;
  };
  private initForms()
  {
    this.txtNamePaymentRental = new FormControl('',Validators.required);
    this.txtCostPaymentRental = new FormControl('0',Validators.required);

    this.txtNamePaymentOthers= new FormControl('',Validators.required);
    this.txtCostPaymentOthers = new FormControl('0',Validators.required);
  };
  private calculateFullPayment(payments:Payments[]):number
  {
    let allCost = payments.map(payment => payment.cost).reduce((x:number,y:number) =>  x + y);
    return Math.round(allCost);
  };


}
