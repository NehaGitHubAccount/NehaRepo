import { browser, by, ExpectedConditions, ElementFinder } from "protractor";
import { LoginPage } from "./login.page";
const loginPage = new LoginPage();
const until = ExpectedConditions;

export class FeesPage {
    sellingTab = browser.element(by.css('a[data-testid="nav-item-selling"]'));
    whatWillItCostLink = browser.element(by.cssContainingText('[href*="estate-agent-fees"]','What will it cost'));
    postCodeBox = browser.element(by.css('input[data-testid="fee-card-postcode-input"]'));
    checkFeeButton = browser.element(by.buttonText('Check fee'));
    priceContainer = browser.element(by.css('div[class="p_fee_1NvO p_increased_14Oa"]'));
    priceAmount = this.priceContainer.element(by.cssContainingText('[class="p_price_2Qj7"]','£999'));
    londonFeesContainer = browser.element(by.css('div[class="p_fee_1NvO p_suppressed_2_Av"]'));
    //functions
    async hoverOverSellingTab(){
        await browser.actions().mouseMove(this.sellingTab).perform();
        await loginPage.browserWaitUntilVisibilityOf(this.clickOnWhatWillItCostLink,12000);
    }

    async clickOnWhatWillItCostLink(){
        await this.whatWillItCostLink.click();
        await loginPage.browserWaitUntilVisibilityOf(this.postCodeBox,12000);
    }

    async inputInPostcodeBox(postcode){
        await this.postCodeBox.sendKeys(postcode);
        await loginPage.browserWaitUntilVisibilityOf(this.checkFeeButton,12000);
    }

    async clickCheckFeeButton(){
        await this.checkFeeButton.click();
    }
    
    async isPriceAmountDisplayed(){
        return await this.priceContainer.isDisplayed().then(()=>{
            return true;
        }),()=>{
            return false;
        }
    }
    
    async colourOfLondonAmount(){
       const cssColor= await this.londonFeesContainer.element(by.css('[class="p_price_2Qj7"]')).getCssValue('text-decoration-color: initial');
       return cssColor;
    
}

}