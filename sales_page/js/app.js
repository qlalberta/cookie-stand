'use strict'

//average cookies stored in an array
//TODO: stored in one array
var avgCookie = [['1st and Pike', 6.3], ['SeaTac Airport', 1.2], ['Seattle Center', 3.7], ['Capitol Hill', 2.3], ['Alki', 4.6]];
var minCustomer = [['1st and Pike', 23], ['SeaTac Airport', 3], ['Seattle Center', 11], ['Capitol Hill', 20], ['Alki', 2]];
var maxCustomer = [['1st and Pike', 65], ['SeaTac Airport', 24], ['Seattle Center', 38], ['Capitol Hill', 38], ['Alki', 16]];
//create an object store max, min and average cookies for each loacation
//need an object for each location to calculate sales whch equals the random number of customers times average cookies

//generate ranndom numbers of customer per hour
function randomCustomerNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//the first location
var pikeSales = {
  location: avgCookie[0][0],
  avgCookie: avgCookie[0][1],
  minCus: minCustomer[0][1],
  maxCus: maxCustomer[0][1],
  sales: 0,
  getSalesNumber: function() {
    this.sales = randomCustomerNumber(minCustomer[0][1],maxCustomer[0][1]) * avgCookie[0][1];
    return Math.floor(this.sales);
  }
};


pikeSales.getSalesNumber();
console.log(pikeSales);
console.log(pikeSales.getSalesNumber());

//the second location
var airportSales = {
  location: avgCookie[1][0],
  avgCookie: avgCookie[1][1],
  minCus: minCustomer[1][1],
  maxCus: maxCustomer[1][1],
  sales: 0,
  getSalesNumber: function() {
    this.sales = randomCustomerNumber(minCustomer[0][1],maxCustomer[0][1]) * avgCookie[0][1];
    return Math.floor(this.sales);
  }
};


airportSales.getSalesNumber();
console.log(airportSales);
console.log(airportSales.getSalesNumber());

//the third location
var seattleCenterSales = {
  location: avgCookie[2][0],
  avgCookie: avgCookie[2][1],
  minCus: minCustomer[2][1],
  maxCus: maxCustomer[2][1],
  sales: 0,
  getSalesNumber: function() {
    this.sales = randomCustomerNumber(minCustomer[0][1],maxCustomer[0][1]) * avgCookie[0][1];
    return Math.floor(this.sales);
  }
};


seattleCenterSales.getSalesNumber();
console.log(seattleCenterSales);
console.log(seattleCenterSales.getSalesNumber());

//the fourth question
var capitalHillSales = {
  location: avgCookie[3][0],
  avgCookie: avgCookie[3][1],
  minCus: minCustomer[3][1],
  maxCus: maxCustomer[3][1],
  sales: 0,
  getSalesNumber: function() {
    this.sales = randomCustomerNumber(minCustomer[0][1],maxCustomer[0][1]) * avgCookie[0][1];
    return Math.floor(this.sales);
  }
};


capitalHillSales.getSalesNumber();
console.log(seattleCenterSales);
console.log(capitalHillSales.getSalesNumber());

//the fifth question
var alkiSales = {
  location: avgCookie[4][0],
  avgCookie: avgCookie[4][1],
  minCus: minCustomer[4][1],
  maxCus: maxCustomer[4][1],
  sales: 0,
  getSalesNumber: function() {
    this.sales = randomCustomerNumber(minCustomer[0][1],maxCustomer[0][1]) * avgCookie[0][1];
    return Math.floor(this.sales);
  }
};


alkiSales.getSalesNumber();
console.log(alkiSales);
console.log(alkiSales.getSalesNumber());

//call objects 15 times for each location
var pikeSalesPerHourList = [];
var airportSalesPerHourList = [];
var seattleCenterSalesPerHourList = [];
var capitalHillSalesPerHourList = [];
var alkiSalesPerHourList = [];
for(var i = 0; i < 15; i++) {
  var pikeSalesPerHour = pikeSales.getSalesNumber();
  var airportSalesPerHour = airportSales.getSalesNumber();
  var seattleCenterSalesPerHour = seattleCenterSales.getSalesNumber();
  var capitalHillSalesPerHour = capitalHillSales.getSalesNumber();
  var alkiSalesPerHour = alkiSales.getSalesNumber();
  pikeSalesPerHourList.push(pikeSalesPerHour);
  // console.log(pikeSalesPerHourList);
  // console.log(j);
  airportSalesPerHourList.push(airportSalesPerHour);
  seattleCenterSalesPerHourList.push(seattleCenterSalesPerHour);
  capitalHillSalesPerHourList.push(capitalHillSalesPerHour);
  alkiSalesPerHourList.push(alkiSalesPerHour);
}

//calculate the total cookie numbers

//loop around the hours
var hourAm = 5;
var hourList1 = [];
for (var j = 6; j < 12; j++) {
  hourAm++;
  hourList1.push(hourAm + 'am');
}
hourList1.push('12pm');

var hourPm = 0;
for (var k = 1; k < 9; k++) {
  hourPm++;
  hourList1.push(hourPm + 'pm');
  console.log(hourList1);
}

var pikeSum = 0;
var airportSum = 0;
var seattleCenterSum = 0;
var capitalHillSum = 0;
var alkiSum = 0;
for (var m = 0; m < 15; m++) {
  pikeSum += pikeSalesPerHourList[m];
  airportSum += airportSalesPerHourList[m];
  seattleCenterSum += seattleCenterSalesPerHourList[m];
  capitalHillSum += capitalHillSalesPerHourList[m];
  alkiSum += alkiSalesPerHourList[m];
}

// generate the list on the browser
//The list should have
// hour
// number of cookies
// store it in the list
// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
var parentElement = document.getElementById('pike');

//creat new elements
var article = document.createElement('article');
parentElement.appendChild(article);

// for(var o = 0;o < )
var h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = pikeSales.location;

var ul = document.createElement('ul');
article.appendChild(ul);

for (var n = 0; n < 16; n++) {
  var li = document.createElement('li');
  ul.appendChild(li);
  if (n != 15 ) {
    li.textContent = hourList1[n] + ': ' + alkiSalesPerHourList[n] + ' cookies';}
  else {
    li.textContent = 'Total: ' + pikeSum + ' cookies';
  }
}
