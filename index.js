const express = require('express');
const app = express();
const port = 3000;

// video- 4 function calling and creation.
// creating the function.

function getWelcomeFunction() {
  return 'Welcome to our service!';
}
//  above the function is written and below calling the function to execute using the - getWelcomeFunction()
app.get('/welcome', (req, res) => {
  // now we will not return direclty the message we will use the function to call. getWelcomeFunction() - to call the function
  res.send(getWelcomeFunction());
});

//  basically this is the function definition below
function getUserGreet(username) {
  return 'Hello ' + username + '!';
}

//  and below one is it's API
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getUserGreet(username));
});

//  q-3
function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is strong';
  } else {
    return 'password is weak';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

//  return the sum of two numbers no we will pass 2 arguments into the function
function CalculateSum(a, b) {
  sum = a + b;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let a = parseFloat(req.query.a);
  let b = parseFloat(req.query.b);
  // here we can pass as many arguments into the function as possible
  res.send(CalculateSum(a, b));
});

function suscription(username, isSuscribed) {
  if (isSuscribed === 'true') {
    return username + ' is Suscribed! ';
  } else {
    return username + ' is not Suscribed!';
  }
}

app.get('/subscription', (req, res) => {
  let username = req.query.username;
  let isSuscribed = req.query.isSuscribed;

  res.send(suscription(username, isSuscribed));
});

//  calculating discount
function discountPrice(value, discount) {
  a = value - (value * discount) / 100;
  return a.toString();
}

app.get('/check-discount', (req, res) => {
  let value = parseFloat(req.query.value);
  let discount = parseFloat(req.query.discount);

  res.send(discountPrice(value, discount));
});

//  greeting messagw  with 3 params

function greetingMessage(name, age, gender) {
  result =
    'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
  return result;
}

app.get('/greet-message', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;

  console.log('Query parameters:', req.query); // This will log the entire query object

  res.send(greetingMessage(name, age, gender));
});

function DiscountedPriceTax(price, discount, tax) {
  a = price - price * (discount / 100);
  b = a + a * (tax / 100);

  return b.toString();
}

app.get('/final-price-tax', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(DiscountedPriceTax(price, discount, tax));
});

//  here into the function we can use let also ...
function TotalExerciseTime(running, cycling, swimming) {
  let TotalTime = running + cycling + swimming;
  //  here we can actually skip the to.string and use it into the api also
  return TotalTime;
}

app.get('/total-e-t', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  //  as you can see i used here to.string to convert the result into the string.
  res.send(TotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
