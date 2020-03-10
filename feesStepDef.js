const { Given,When,Then } = require("cucumber");
const { browser } = require("protractor");
import { FeesPage } from "../Pages/fees.page";

const feesPage = new FeesPage();

Given('Open the purpleBricks URL',async()=>{
    return await browser.driver.get('https://www.purplebricks.co.uk');
 })
 
 
 When('Hover over Selling menu',async()=>{
    await feesPage.hoverOverSellingTab();
 
 });
 
 When('Click ‘what will it cost?’',async()=>{
    await feesPage.clickOnWhatWillItCostLink();
 });
 
 When('Enter a post code (use a Non-London post code)',async()=>{
    await feesPage.inputInPostcodeBox('B91 1AA');
 });

 When('Click on the Check Fee button',async()=>{
    await feesPage.checkFeeButton();
 });
s
 Then('Verify the price is £999',async()=>{
     await expect (feesPage.isPriceAmountDisplayed).toEqual('999');
 });    

 Then('Verify the London price font colour is not white',async()=>{
    await expect (feesPage.colourOfLondonAmount).isNot('#FFFFFF');   

 });



 
