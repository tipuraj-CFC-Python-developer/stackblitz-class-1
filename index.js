const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

// for the upper case printing
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

//  for the concatination for the letter

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  // below res.send and it takes is for the printing the response...( can we send here the multiple if we want to print multiple things )
  res.send(fullName);
});

// concatination  of the clander to print month and year
app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let fromatted_date = month + ', ' + year;
  res.send(fromatted_date);
});

//  print Namaste, Tipu in this format
app.get('/greet', (req, res) => {
  let prefix = 'Namaste,';
  let name = req.query.name;
  let greeting = prefix + ' ' + name + '!';
  res.send(greeting);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let fulladdress = street + ' ' + city + ' ' + state;
  res.send(fulladdress);
});

//  return a formatted email here
app.get('/email', (req, res) => {
  let name = req.query.name;
  let domain = req.query.domain;
  let complete_email = name + '@' + domain;
  res.send(complete_email);
});

//  to know about the Mathematcal operators into the node.js  video -2

app.get('/totaldist', (req, res) => {
  let add1 = parseFloat(req.query.add1);
  let add2 = parseFloat(req.query.add2);
  let total = add1 + add2;
  res.send(total.toString());
});

app.get('/ttotal_time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totall = time1 + time2 + time3;
  res.send(totall.toString());
});

// average speed calculation'
app.get('/avg-speed', (req, res) => {
  let dist = parseFloat(req.query.dist);
  let time = parseFloat(req.query.time);
  let total = dist / time;
  res.send(total.toString());
});

app.get('/eta', (req, res) => {
  let dist = parseFloat(req.query.dist);
  let speed = parseFloat(req.query.speed);
  let total = dist / speed;
  res.send(total.toString());
});

app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let calories = parseFloat(req.query.calories);
  let totalCalories = (duration1 + duration2) * calories;
  res.send(totalCalories.toString());
});

app.get('/intrest', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let interestEarned = (principal * time * rate) / 100;
  res.send(interestEarned.toString());
});

//  if else statement video - 3

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  // now assign a empty variable which will be checked
  let result;
  if (number >= 0) {
    result = 'Positive';
  } else {
    result = 'Negative';
  }
  res.send('Number is ' + result);
});

app.get('/check-even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  //  here to equalize we need to use 3 ===
  if (number % 2 === 0) {
    result = 'Even';
  } else {
    result = 'Odd';
  }
  res.send('Number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'True';
  let result;
  if (isLoggedIn) {
    result = 'User is Logged In';
  } else {
    result = 'User is Not Logged In';
  }
  res.send(result);
});

app.get('/eligiblity', (req, res) => {
  let age = parseFloat(req.query.age);
  let discount;
  if (age > 65) {
    discount = 'User is eligible of the discount';
  } else {
    discount = 'User is not eligible for the discount';
  }
  res.send(discount);
});

//  here using 3 conditons at same time here we can use 'else if'
app.get('/numberCheck', (req, res) => {
  let numberCheck = parseFloat(req.query.numberCheck);
  let result;
  if (numberCheck === 0) {
    result = 'Number is Zero';
  } else if (numberCheck > 0) {
    result = 'Number is Positive';
  } else {
    result = 'Number is Negative';
  }
  res.send(result);
});

app.get('/temp-check', (req, res) => {
  let temperatureCelsius = parseFloat(req.query.temperatureCelsius);
  let result;
  if (temperatureCelsius < 15) {
    result = 'Cold';
  } else if (temperatureCelsius < 25) {
    result = 'Warm';
  } else {
    result = 'Hot';
  }

  res.send('Temperature is ' + result);
});

app.get('/setps-check', (req, res) => {
  let NoOfSteps = parseFloat(req.query.NoOfSteps);
  let result;
  if (NoOfSteps < 5000) {
    result = 'Low';
  } else if (NoOfSteps < 10000) {
    result = 'Moderate';
  } else {
    result = 'High';
  }
  res.send('Activity level is ' + result);
});

app.get('/No_of_likes', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let engagememnt;
  if (likes < 100) {
    engagememnt = 'Low';
  } else if (likes < 500) {
    engagememnt = 'Medium';
  } else {
    engagememnt = 'High';
  }
  res.send('Engagement is ' + engagememnt);
});

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
