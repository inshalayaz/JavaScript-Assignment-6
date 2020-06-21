// Q1

//  var today = new Date();
// document.write(today)

// Q2

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var today = new Date();
// let newMonth = today.getMonth()

// alert(month[newMonth])

// Q3

// var days = ['','mon','tue','wed','thur','fri','sat','sun']
// var today = new Date();
// var day = today.getDay();

// alert(days[day])

// Q4

// var today = new Date();
// var day = today.getDay();

// if(day === 5 || day === 6){
//     alert('Its Fun day')
// }else{
//     alert('its normal')
// }

// Q5

// var today = new Date();
// var date = today.getDate();
// console.log(date)

// if (date <= 15){
//     alert('first fifteen days of month')
// }else{
//     alert('last fifteen days on month')
// }

// Q6

// var today = new Date();
// var day = today.getDay();

// var milliSeconds = today.getMilliseconds()

// console.log(milliSeconds)

// document.write('Current Date:' + today + '<br>');

// let oldDate = new Date('July 20, 69 00:20:18 GMT+00:00') ;
// const oldDateInMin = (oldDate /100000)* -1

// document.write("time in miliseconds" + oldDate.getTime());
// document.write('<br> time in minutes' + Math.ceil(oldDateInMin))

// Q7

//  let today = new Date()
//  let time = today.getTime();
//  var milliseconds = parseInt((time%1000)/100)
//         , seconds = parseInt((time/1000)%60)
//         , minutes = parseInt((time/(1000*60))%60)
//         , hours = parseInt((time/(1000*60*60))%24);
//  console.log(hours)

//  if (hours < 12 ){
//      alert('its AM')
//  }else{
//      alert('its PM')
//  }

// Q8


    // var date = new Date();
    // date.setMonth(11);
    // date.setDate(31)
    // alert(date)



// // Q9 
// let date = new Date()
//     date.setDate(18)
//     date.setMonth(5)

// Can't solve this one

// Q10


// Q11


// Q12


// Q13

// function calculate_age(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
// let date = +prompt('Year,Date,Month')
// alert(calculate_age(new Date(date)));

// Q14

// let name = prompt('Name')
// let oldUnits = +prompt('No old of units')
// let currentUnits = +prompt('Current Units')
// let date = new Date()
// let month = date.getMonth()
// const unitPrice = 16;
// const lateCharges = 350;

// let unitsConsumed = currentUnits - oldUnits;

// let bill = unitsConsumed * unitPrice;
// let lateBill = bill + lateCharges

// var months = new Array();
// months[0] = "January";
// months[1] = "February";
// months[2] = "March";
// months[3] = "April";
// months[4] = "May";
// months[5] = "June";
// months[6] = "July";
// months[7] = "August";
// months[8] = "September";
// months[9] = "October";
// months[10] = "November";
// months[11] = "December";

// document.write('Name: ' + name + '<br>');
// document.write('Month: ' +months[month] + '<br>')
// document.write('Number of units: ' +unitsConsumed+ '<br>')
// document.write('Chare per unit: ' + unitPrice + '<br>');
// document.write('Net Amount payable (within due date): ' + bill + '<br>');
// document.write('Late Payment charges: ' + lateCharges + '<br>');
// document.write('Gross Amount payable (after due date): ' + lateBill + '<br>');





