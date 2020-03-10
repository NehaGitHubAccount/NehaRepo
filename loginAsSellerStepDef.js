const { Given,When,Then } = require("cucumber");
const { browser } = require("protractor");
import { LoginPage } from "../Pages/login.page";

const loginPage = new LoginPage();


Given('Open the purpleBricks URL',async()=>{
   return await browser.driver.get('https://www.purplebricks.co.uk/account/login');
})


When('I fill basic Login details',async()=>{
   await loginPage.basicLoginDetails('Neha','Goel','07576829217');

});

When('Register with all correct details',async()=>{
   await loginPage.FindAddress('B91 1AA')
});

When('Find the address',async()=>{
   await loginPage.clickonchosenAddress('Warwick Road, Solihull, B91 1AA');

})

Then('Verify the email validation page is displayed ',()=>{
   await loginPage.confirmRegistration('neha.neha80@gmail.com','neha.neha80@gmail.com','Testing*12');
   const message = loginPage.validationMesageDisplayed();
   const textOfTheMessage = message.getText();
   expect (textOfTheMessage).to.be('Email Validation');

})

