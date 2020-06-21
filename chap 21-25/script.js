// Q1

// let firstName = prompt('Fisrt Name')
// let lastName = prompt('Last Name')

// let fullName = firstName + '' + lastName;
// alert(fullName)

// Q2

// let mobileName = prompt('Enter your mobile name');

// let len = mobileName.length
// alert(mobileName + '\n' + 'string length:' + len)

// Q3

// let word = 'pakistani'

// for (i=0; i<= word.length-1; i++){
//     if(word[i] == 'n'){
//         document.write('pakistani \n index of n is ' + i)
//         break
//     }
// }

// let word = 'pakistani'

// document.write(word.indexOf('n'));

// Q4

// let word = 'Hello World'

// document.write(word.lastIndexOf('l'))

// Q5

// let word = 'pakistani'

// document.write(word[3])

// Q6

// let firstName = prompt('Fisrt Name')
// let lastName = prompt('Last Name')

// let fullName = firstName.concat(lastName)
// alert(fullName)

// Q7

// let city = 'hyderabad'
// let replaced = city.replace('hyder','islama')
// alert(replaced)

// Q8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// let newMessage = message.replace(/and/g, '&')
// document.write('Before:' + message + '<br>' + 'Now:' + newMessage)

// Q9

// let Num = '472'
// let newNum = parseInt(Num)

// document.write(
//     'Value:' + Num + '<br>' + 
//     'Type:' + typeof(Num) + '<br>' +
//     'Valuee:' + Num + '<br>' + 
//     'Type:' + typeof(newNum)

// )

// Q10

// let input = prompt('Enter Something')
// let newInput =  input.toUpperCase()
// alert(newInput)

// Q11

// let input = prompt('Enter Something')
// let newInput =  input[0].toUpperCase() + input.slice(1)
// alert(newInput)

// Q12

//  let num = 35.36
// let noNum = num.toString()

// document.write(noNum.replace('.',''))

// Q13

// let name = prompt('Enter Your Name');

//  if(/^[a-zA-Z]*$/.test(name) == false){
//     alert('please enter a valid name')
// }else{
//     alert(name)
// }

// Q14

// let items = ['cake', 'apple pie', 'chips' , 'cookies' , 'patties']

// let search = prompt('enter what you want')

//  search = search.toLowerCase();

// for(i=0; i<items.length;i++){
//     if(items[i] !== search ){
//         alert('not available');
//         break;
//     }else{
//         alert('available')
//     }
// }


// Q15

// let pass = prompt('Enter Password')

// if (pass.match(/[a-z]/g) && pass.match( 
//     /[A-Z]/g) && pass.match( 
//     /[0-9]/g) && pass.match( 
//     /[^a-zA-Z\d]/g) && pass.length >= 6) {
//         alert('Great')
//     }else{
//         alert('please enter a valid password')
//     }
    

// Q16 


// var university = 'University of Karachi';

// for(i=0;i<university.length;i++){
     
//      document.write(university[i].split() + '<br>')
// }

// Q17

// var input = prompt('Enter Something')
// var len = input.length - 1;
// alert(input[len])

// Q18

// var para = 'The quick brown fox jumps over the lazy dog'

// let count = para.match(/the/ig)

// alert ('the appeared ' + count.length + ' times')


