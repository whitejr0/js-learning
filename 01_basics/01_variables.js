const accountId = 144553
let accountEmail = 'abc@gmail.com'
var accountPassword = '12345'
accountCity = "Tamilnadu"
let accountState;

// accountId = 2 // not allowed

accountEmail = 'haha@gmail.com'
accountPassword = 'seeyou123'
accountCity = 'Jaipur'

console.log(accountId);
console.table([accountId, accountCity, accountState ,accountEmail, accountPassword])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/ 