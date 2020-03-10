import { browser, by, ExpectedConditions, ElementFinder } from "protractor";
const until = ExpectedConditions;

export class LoginPage {
    //login page elements
    loginButton = browser.element(by.cssContainingText('a[href*="https://www.purplebricks.co.uk/account/login"]','LOG IN'));
    registerTab = browser.element(by.css('[class="tab register active"]'));
    foreNameField = browser.element(by.id('forename'));
    lastNameField = browser.element(by.id('lastname'));
    mobilePhoneField = browser.element(by.id('mobilePhone'));
    registerButton = browser.element(by.id('register_btn_toProperty_ID'));
    //Find Address Elements
    sellerButton = browser.element(by.id('inputTypeSeller'));
    yesButton = browser.element(by.id('inputPropSoldYes'));
    postCodeField = browser.element(by.id('address_input_postcode_register_ID'));
    findAddressButton = browser.element(by.css('div[class="btn btn-green findAddress"]'));
    header = browser.element(by.cssContainingText('div.mobile-header', 'Address'));
    //Confirm Registration Elements
    selectAllAddress = browser.all(by.css('div[class="content-container"]'));
    chooseSingleAddress = this.selectAllAddress(by.css('div[class="dropdown-parent"]')).all(by.css('div[class="addresses-outer"])')).element(by.tagName('li'));
    emailAddressField = browser.element(by.id("inputEmail"));
    confirmEmailAddressField = browser.element(by.id('inputConfirmEmail'));
    passwordField = browser.element(by.id('inputPassword'));
    submitButton = browser.element(by.id('buttonSubmit'));
    validationMessage = browser.element(by.css('div[class="col-md-12 text-center"]')).by.tagName('h1');




//functions

    async browserWaitUntilVisibilityOf(elementName, timeout) {
    return await browser.wait(until.visibilityOf(elementName), timeout).catch(() => { });
    }

    async basicLoginDetails(foreName: string, lastName: string, phoneNumber: number): Promise<void> {
    await this.loginButton.click();
    await this.registerTab.click();
    await this.foreNameField.clear();
    await this.foreNameField.sendKeys(foreName);
    await this.lastNameField.clear();
    await this.lastNameField.sendKeys(lastName);
    await this.mobilePhoneField.clear();
    await this.mobilePhoneField.sendKeys(phoneNumber);
    await this.registerButton.click();
    await this.registerButton.click();
    await this.browserWaitUntilVisibilityOf(this.sellerButton, 12000);
    }

    async FindAddress(postCode:string):Promise<void> {
    await this.sellerButton.click();
    await this.yesButton.click();
    await this.postCodeField.clear();
    await this.postCodeField.sendKeys(postCode);
    await this.findAddressButton.click();
    await this.browserWaitUntilVisibilityOf(this.header,12000);
    }

    async clickonchosenAddress(address:string): Promise<ElementFinder> {
    const selectAddress = await this.chooseSingleAddress().sendKeys(address);
    return selectAddress.scrollIntoView().click();
    }

    async confirmRegistration(emailAddress:string,confirmedEmailAddress:string,password:string):Promise<Boolean>{
        const firstEmailAddress = await this.emailAddressField.sendKeys(emailAddress);
        const confirmEmailAddress=await this.emailAddressField.sendKeys(confirmedEmailAddress);
        if(firstEmailAddress===confirmEmailAddress){
            return true;
        }else false;
        await this.passwordField.sendKeys(password);
        await this.submitButton.click();
                
    }

    async validationMesageDisplayed(){
        return await this.validationMessage.isDisplayed();
    }

   
}
