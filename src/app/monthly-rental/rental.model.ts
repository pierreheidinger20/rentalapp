export class Payments
{
    public name:string;
    public cost:number;
}

export class UserPayment
{
    public name:string;
    public payment:number;
}

export class Rental {
    public name:string;
    public month:number;
    public year:number;
    public registerDate:Date;
    public rentalPayments:Payments[];
    public fullPaymentRental:number;
    public otherPayments:Payments[];
    public fullPaymentsOthers:number;
    public usersPayments:UserPayment[];

    constructor(){
        this.rentalPayments = [];
        this.otherPayments = [];
        this.usersPayments = [];
    }
}
