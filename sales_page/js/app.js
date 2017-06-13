'use strict';

//store given data in an array
//TODO: stored in one array for all three groups of data
var avgCookie = [['1st and Pike', 6.3], ['SeaTac Airport', 1.2], ['Seattle Center', 3.7], ['Capitol Hill', 2.3], ['Alki', 4.6]];
var minCustomer = [['1st and Pike', 23], ['SeaTac Airport', 3], ['Seattle Center', 11], ['Capitol Hill', 20], ['Alki', 2]];
var maxCustomer = [['1st and Pike', 65], ['SeaTac Airport', 24], ['Seattle Center', 38], ['Capitol Hill', 38], ['Alki', 16]];

//create an object store max, min and average cookies for each location
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

//store sales per hour in an array
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
  airportSalesPerHourList.push(airportSalesPerHour);
  seattleCenterSalesPerHourList.push(seattleCenterSalesPerHour);
  capitalHillSalesPerHourList.push(capitalHillSalesPerHour);
  alkiSalesPerHourList.push(alkiSalesPerHour);
}

//calculate the total cookie numbers
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

//store the hours in an array
//store the morning hours
// var hourAm = 5;
// var hourList1 = [];
// for (var j = 6; j < 12; j++) {
//   hourAm++;
//   hourList1.push(hourAm + 'am');
// }
// hourList1.push('12pm');
// //store the after hours into the same array
// var hourPm = 0;
// for (var k = 1; k < 9; k++) {
//   hourPm++;
//   hourList1.push(hourPm + 'pm');
//   console.log(hourList1);
// }


var hourList = [];
var hourText = 6;
var j = 6;
for (j = 6; j < 21; j++) {
  if (hourText < 12) {
    hourList.push(hourText + 'am');
    hourText++;
    console.log(hourList);
  }
  else if (hourText == 12) {
    hourList.push(hourText + 'pm');
    hourText++;
  }
  else {
    hourText -= 12;
    hourList.push(hourText + 'pm');
    hourText += 12;
    hourText++;
  }
}



// generate the list on the browser
//The list should have
// hour
// number of cookies-per hour and total
// get (from the DOM) who the parent element is going to be. where am I attaching this new element


var parentElement = document.getElementById('sales');
var article = document.createElement('article');
parentElement.appendChild(article);
var h2_1 = document.createElement('h2');
article.appendChild(h2_1);
h2_1.textContent = avgCookie[0][0];
var ul_1 = document.createElement('ul');
article.appendChild(ul_1);

for (var n = 0; n < 16; n++) {
  var li_1 = document.createElement('li');
  ul_1.appendChild(li_1);
  if (n != 15 ) {
    li_1.textContent = hourList[n] + ': ' + pikeSalesPerHourList[n] + ' cookies';
  } else {
    li_1.textContent = 'Total: ' + pikeSum + ' cookies';
  }
}

var h2_2 = document.createElement('h2');
article.appendChild(h2_2);
h2_2.textContent = avgCookie[1][0];
var ul_2 = document.createElement('ul');
article.appendChild(ul_2);

for (var o = 0; o < 16; o++) {
  var li_2 = document.createElement('li');
  ul_2.appendChild(li_2);
  if (o != 15 ) {
    li_2.textContent = hourList[o] + ': ' + airportSalesPerHourList[o] + ' cookies';
  } else {
    li_2.textContent = 'Total: ' + airportSum + ' cookies';
  }
}

var h2_3 = document.createElement('h2');
article.appendChild(h2_3);
h2_3.textContent = avgCookie[2][0];
var ul_3 = document.createElement('ul');
article.appendChild(ul_3);

for (var p = 0; p < 16; p++) {
  var li_3 = document.createElement('li');
  ul_3.appendChild(li_3);
  if (p != 15 ) {
    li_3.textContent = hourList[p] + ': ' + seattleCenterSalesPerHourList[p] + ' cookies';
  } else {
    li_3.textContent = 'Total: ' + seattleCenterSum + ' cookies';
  }
}

var h2_4 = document.createElement('h2');
article.appendChild(h2_4);
h2_4.textContent = avgCookie[3][0];
var ul_4 = document.createElement('ul');
article.appendChild(ul_4);

for (var q = 0; q < 16; q++) {
  var li_4 = document.createElement('li');
  ul_4.appendChild(li_4);
  if (q != 15 ) {
    li_4.textContent = hourList[q] + ': ' + capitalHillSalesPerHourList[q] + ' cookies';
  } else {
    li_4.textContent = 'Total: ' + capitalHillSum + ' cookies';
  }
}

var h2_5 = document.createElement('h2');
article.appendChild(h2_5);
h2_5.textContent = avgCookie[4][0];
var ul_5 = document.createElement('ul');
article.appendChild(ul_5);

for (var r = 0; r < 16; r++) {
  var li_5 = document.createElement('li');
  ul_5.appendChild(li_5);
  if (r != 15 ) {
    li_5.textContent = hourList[r] + ': ' + alkiSalesPerHourList[r] + ' cookies';
  } else {
    li_5.textContent = 'Total: ' + alkiSum + ' cookies';
  }
}
