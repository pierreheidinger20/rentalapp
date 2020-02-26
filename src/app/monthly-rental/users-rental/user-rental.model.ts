export class UserRental{
    public uid:string;
    public name:string;
    public porcentual:number;
    
    constructor(uid:string,userObj:any)
    {
        this.uid = uid;
        this.name = userObj.name;
        this.porcentual = userObj.porcentual;
    }
}