const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');


//abrir ventana con url chrome

function browser() {

    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    

    var driver = new webdriver.Builder()
                     .withCapabilities(webdriver.Capabilities.chrome())
                     .build();

    

    
    //open windows authentication url           
    driver.get('https://login.aol.com/account/create?lang=en-us&src=mail&activity=default&pspid=1197803637&.done=https%3A%2F%2Fapi.login.aol.com%2Foauth2%2Fauthorize%3Fclient_id%3Ddj0yJmk9VlN3cDhpNm1Id0szJmQ9WVdrOVdtRm1aMVU1Tm1zbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mYQ--%26language%3Den-us%26nonce%3DidyG1ursCi4FFPj2n4f4UwN21xi1X7Wf%26redirect_uri%3Dhttps%253A%252F%252Foidc.mail.aol.com%252Fcallback%26response_type%3Dcode%26scope%3Dmail-r%2Bycal-w%2Bopenid%2Bopenid2%2Bmail-w%2Bmail-x%2Bsdps-r%2Bmsgr-w%26src%3Dmail%26state%3DeyJhbGciOiJSUzI1NiIsImtpZCI6IjZmZjk0Y2RhZDExZTdjM2FjMDhkYzllYzNjNDQ4NDRiODdlMzY0ZjcifQ.eyJyZWRpcmVjdFVyaSI6Imh0dHBzOi8vbWFpbC5hb2wuY29tL3dlYm1haWwtc3RkL2VuLXVzL3N1aXRlIn0.K15qdgw15ZmjBPnBSygIPWo0bye2YGHfBdL3UF7yB-azbtVLYxBrvyZw_j5ctu3OiMi-jNP0YDkw1rC0PmK0dY9oulwUqGVvMfh9oxa6HsNUNNooLbplvkmS6Wzx6ktbdiRQUrXixzRZwoa_N7SKBda9AeeHMICuYya128nTz20&specId=yidReg&done=https%3A%2F%2Fapi.login.aol.com%2Foauth2%2Fauthorize%3Fclient_id%3Ddj0yJmk9VlN3cDhpNm1Id0szJmQ9WVdrOVdtRm1aMVU1Tm1zbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mYQ--%26language%3Den-us%26nonce%3DidyG1ursCi4FFPj2n4f4UwN21xi1X7Wf%26redirect_uri%3Dhttps%253A%252F%252Foidc.mail.aol.com%252Fcallback%26response_type%3Dcode%26scope%3Dmail-r%2Bycal-w%2Bopenid%2Bopenid2%2Bmail-w%2Bmail-x%2Bsdps-r%2Bmsgr-w%26src%3Dmail%26state%3DeyJhbGciOiJSUzI1NiIsImtpZCI6IjZmZjk0Y2RhZDExZTdjM2FjMDhkYzllYzNjNDQ4NDRiODdlMzY0ZjcifQ.eyJyZWRpcmVjdFVyaSI6Imh0dHBzOi8vbWFpbC5hb2wuY29tL3dlYm1haWwtc3RkL2VuLXVzL3N1aXRlIn0.K15qdgw15ZmjBPnBSygIPWo0bye2YGHfBdL3UF7yB-azbtVLYxBrvyZw_j5ctu3OiMi-jNP0YDkw1rC0PmK0dY9oulwUqGVvMfh9oxa6HsNUNNooLbplvkmS6Wzx6ktbdiRQUrXixzRZwoa_N7SKBda9AeeHMICuYya128nTz20')
    
    return driver
}


exports.Browser = browser
