
const {Builder, By, Key, until, Browser} = require('selenium-webdriver');
const browser = require('../bot').Browser
const CreateUser = require('../model/botModel').CreateUser
// const axios = require('axios')

 async function insertUser  () {
//OPEN BROWSER CHROME
 driver = await browser()

 //WAIT TO SET PHONENUMBER AND MONTH
 await driver.sleep(20000)

//GET AND SET USERNAME
 const name = CreateUser.Name()
 username = await driver.findElement(By.id('usernamereg-firstName'))
 .sendKeys(name)


 const secondName = CreateUser.Name()
 username = await  driver.findElement(By.id('usernamereg-lastName'))
 .sendKeys(secondName)

// // //GET AND SET EMAIL

 const email = CreateUser.Email()
 username =  await driver.findElement(By.id('usernamereg-yid'))
 .sendKeys(email)

// // //GET AND SET PASSWORD

const password = CreateUser.Password()
username = await driver.findElement(By.id('usernamereg-password'))
.sendKeys(password)

// // SET PHONE
const phone = CreateUser.Phone()
username = await driver.findElement(By.id('usernamereg-phone'))
.sendKeys(phone)
// //GET AND SET DAY AND YEAR

const dd = CreateUser.Date()
username = await driver.findElement(By.id('usernamereg-day'))
.sendKeys(dd)

const yy = CreateUser.Year()
username = await driver.findElement(By.id('usernamereg-year'))
.sendKeys(yy)

// axios.post('/', {
//         name : name,
//         secondName : secondName,
//         email : email,
//         password : password,
//         passwordConfirm : passwordConfirm,
//         phoneNumber : phoneNumber
// })
// .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

   
}

exports.insertUser = insertUser

 