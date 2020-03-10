Feature: Verify the fees of all the post code expect non-London Postcode

Scenario: Verify the ‘How much are our fees?’ post code search
Given : I Navigate to purpleBricks  URL ‘https://purplebricks.co.uk/’
When : Hover over Selling menu
And : Click ‘what will it cost?’
And : Enter a post code (use a Non-London post code)
And : Click on the Check Fee button
Then : Verify the price is £999
And : Verify the London price font colour is not white.