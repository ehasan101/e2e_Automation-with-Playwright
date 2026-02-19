export enum Role{


     Admin = "Admin",
     Agent = "Agent",
     Customer = "Customer",
     Merchant = "Merchant "


}



export interface UserModel {

    fName : string,
    lName : string,
    email : string,
    password : string,
    phoneNumber : string, 
    Address: string, 


}