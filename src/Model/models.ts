export class User{
    _id:any;
    userId:string;
    userName:string;
    password:string;
    email:string;
    createdOn:Date;
    constructor(){
        this.userId="";
        this.userName="";
        this.password="";
        this.email="";
        this.createdOn=new Date;
    }
} 

export class signInResponse{
    isValidCredentidals:boolean;
    user:User;
    message:string;
    constructor(){
        this.isValidCredentidals=false;
        this.user=new User;
        this.message="";
    }
}