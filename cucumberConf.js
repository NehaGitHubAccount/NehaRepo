//const { browser } = require("protractor");

exports.config = {
    directConnect:true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom', //set to "custom" instead of cucumber.
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      './e2e/purpleBricks/Feature/login.feature',
      './e2e/purpleBricks/Feature/fees.feature',
    ],
  
      
    cucumberOpts: {
      require: ['./e2e/purpleBricks/StepDefinition/loginAsSellerStepDef.js',
      /e2e/purpleBricks/StepDefinition/feesStepDef.js],           
      tags: false,
      //format: 'pretty',
      profile: false,
      'no-source': true
    },

    onPrepare:function(){
        browser.manage().window().maximize();//maximise the browser before executing
    }
  };