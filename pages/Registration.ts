
import { Page } from "@playwright/test";
import { Role , UserModel } from "../userModel/person.model";

export  class RegistrationPage{

    constructor ( private page : Page   ){  }



    async fillfName( fname : string ){
        await this.page.getByRole( "textbox" , { name : "First Name" } ).fill(fname);
    }

     async filllName( lname : string ){
        await this.page.getByRole( "textbox" , { name : "Last Name" } ).fill(lname);
    }
    
      async fillEmail( email : string ){
        await this.page.getByRole( "textbox" , { name : "Email" } ).fill(email);
    }

      async fillPassword( password : string ){
        await this.page.getByRole( "textbox" , { name : "Password" } ).fill(password);
    }

       async fillPhoneNum( phoneNo : string ){
        await this.page.getByRole( "textbox" , { name : "Phone Number" } ).fill(phoneNo);
    }

    async fillAdress( address : string ){
        await this.page.getByRole( "textbox" , { name : "Address" } ).fill(address);
    }


    async clickCreateUserBtn(){
        await this.page.getByRole( "button" , {name : "REGISTER"}   ).click();
    }



    async createUser( userModel : UserModel ){


        await this.fillfName( userModel.fName );
        await this.filllName( userModel.lName );
        await this.fillEmail( userModel.email );
        await this.fillPassword(userModel.password);
        await this.fillPhoneNum( userModel.phoneNumber );
        await this.fillAdress( userModel.Address );
        await this.page.getByRole('checkbox').check();
        await this.clickCreateUserBtn();


    }





}