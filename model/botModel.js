
const e = require('express');
const faker = require('faker')

let name = '';

class CreateUser {
    constructor(){}
//GENERATE NAME RANDOM
     static Name(){
        name = faker.name.firstName()
        console.log(name)
        return name   
        }   
//GENERATE RANDOM EMAIL
   static Email(){
        
        const email = faker.random.alphaNumeric(6)
        console.log(email)
        return name + email
      }
//GENERATE RANDOM PASSWORDN
     static  Password(){
          const password = 'izanagi12'
          return password
      }

      static Date(){
           const number = Math.floor(Math.random()*10);
           return number
      }

      static Year(){
          const year = '199'
          return year + Math.floor(Math.random() * 10)
      }

      static Phone() {
           const number = '937419872'
           return number
      }
    //   getNumber(){
          
    //   }

    }

 exports.CreateUser = CreateUser