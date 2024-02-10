// If-Else:
// 1. Age Elibility Checker:

let age = window.prompt('Enter your age')

if(age >= 20) {
    console.log(`your age is  ${age}, and you are qualified to move to the next stage pf the interview`)
} else {
    console.log(`Sorry! you are not qualified for the next stage of this application because you are below our age expectation`)
}


// 2. Even or Odd number Identifier
let number = window.prompt('Input number you want to check')

if(number % 2 == 0) {
    console.log(`You have entered ${number} and it is an even number`)
} else {
    console.log(`You have entered ${number} and it is an odd number`)
}



// 3. Vowel or Consonant classifier

const vowels = ['A', 'E', 'I', 'O', 'U']

const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let alphabet = window.prompt("Please type in the letter you want to check into the box below")

if(consonants.includes(alphabet.toUpperCase())) {
    console.log(`The letter you entered is a consonant`)
} else {
    console.log(`The letter you entered is a vowel`)
}



// 4. This is a checker for the bigger of two numbers

const firstNumber = window.prompt('Input the first number')
const secondNumber = window.prompt('Input the second number')
let message = firstNumber > secondNumber ? console.log(`${firstNumber} is greater`) : console.log(`${firstNumberNumber} is not greater`);


// 5. Simple Calculator 

let number1 = Number(window.prompt('Input the First Number'))
let number2 = Number(window.prompt('Input the Second Number'))
let operator = window.prompt('Please input any of the following operators (+, - , /, *)')

let result = ''

if (isNaN(number1) || isNaN(number2)){
    console.log('Please input a valid number');
} else {
    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === "-") {
        result = number1 - number2;
    } else if (operator === "*") {
        result = number1 * number2;
    } else if (operator === "/") {
        if(number2 === 0){
            console.log("unable to divide number by 0")
        } else {
            result = number1 / number2;
        }
    } else {
        result = "Invalid"
        console.log(`Invalid operator`)
    }


    if (result !== undefined && result !== "Invalid") {
        console.log(`number 1: ${number1} ${operator} number 2: ${number2}`);
        console.log(`result: ${result}`);
    }
    
}




//Switch Statement 

// 1.  Day of the Week Printer: Print the name of the day for a given number (1-7).


let day = parseFloat(window.prompt('Input any number between 1 and 7'));

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: 
    console.log('Please Input a number between 1 and 7')
}


// 2. Grade Evaluator: Assign a letter grade (A, B, C, D, or F) based on a numerical grade

let grade = parseFloat(window.prompt('Want to know your grade? Please input your score'));

switch (true) {
  case grade >= 0 && grade <= 39:
        console.log('F')
        break;
    case grade >= 40 && grade <= 44:
        console.log('E') 
        break;
    case grade >= 45 && grade <= 49:
        console.log('D') 
        break;
    case grade >= 50 && grade <= 59:
        console.log('C')
        break;
    case grade >= 60 && grade <= 74:
        console.log('B')
        break;
    case grade >= 75 && grade <= 100:
        console.log('A')
        break;
    default:
        console.log('Please input a valid score');
}


// 3. Rock Paper Scissors


let computerChoice = Math.floor(Math.random() * 100)

switch (true) {
    case computerChoice > 0 && computerChoice <= 33:
        computerChoice = "rock";
        break;
    case computerChoice > 33 && computerChoice <= 66:
        computerChoice = "paper";
        break;
    case computerChoice > 66 && computerChoice <= 100:
        computerChoice = "scissors";
        break;
}

let playerChoice = window.prompt(`'Input either 'rock, paper or scissors' into the bar`);

let message = `You picked ${playerChoice}, and the computer picked ${computerChoice}`;

switch (true) {
        case playerChoice == 'rock' && computerChoice == 'paper': // rock as a choice
            console.log(message);
            console.log('Paper covers Rock, You lose');
            break;
        case playerChoice == 'rock' && computerChoice == 'scissors':
            console.log(message);
            console.log('Rock smashes Scissors, You Win');
            break;
        case playerChoice == 'paper' && computerChoice == 'scissors': // paper as a choice
            console.log(message);
            console.log('Scissors cuts Paper, You lose');
            break;
        case playerChoice == 'paper' && computerChoice == 'rock':
            console.log(message); 
            console.log('Paper covers Rock, You Win');
            break;
        case playerChoice == 'scissors' && computerChoice == 'rock': // scissprs as a choice
            console.log(message);
            console.log('Rock smashes Scissors, You lose');
            break;
        case playerChoice == 'scissors' && computerChoice == 'paper':
            console.log(message); 
            console.log('Scissors cut Paper, You Win');
            break;
        case playerChoice === computerChoice:
            console.log(message);
            console.log('That was a tie');
            break;
        default:
            console.log('Please choose and input from the specified criteria of "rock, paper and scissors"')  
    }



// 4. Month Name Displayer

let month = parseFloat(window.prompt('Input any number between 1 and 12'));

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default: 
        console.log('Please Input a number between 1 and 12')
}



// 5. Simple Menu: Create a menu with a few options and execute different actions
// based on the user's choice.

let choose = window.prompt("Please choose from any of the available options by its index number \n 1. Check airtime Balance \n 2. Check Data Balance \n 3. Check Data Plan \n 4 others")

switch(choose){
    case '1':
        console.log(`Your airtime balance is: 905.35`)
        break;
    case '2':
        console.log(`Your Data Balance is: 1289MB`)
        break;
    case '3':
        console.log(`Your data plan is: 1TB for 1 year`)
        break;
    case '4':
        console.log(`Other offers are not available at the moment4`)
        break;
    default: 
        console.log(`Please pick a number from the options given to you`)
}



// For Loops:
// 1. Number Summation: Calculate the sum of all numbers from 1 to a given
// number.

let summation = 0;
let givenNumber = 50;


for (x = 0; x < givenNumber; x++ ){
    summation += x;

}

console.log(summation);



// 2. Countdown Timer: Print a countdown from a given number to 1.

givenNumber = 20
let countDown = givenNumber;
for (x = 0; x < givenNumber; x++) {
    countDown -= 1;
    console.log(countDown);
}



// 3. Multiplication Table Generator: Print a multiplication table for a given number.

let multiplier = 5;

for (y = 1; y <= 12; y++) {
  

    table = y * multiplier;
    console.log(`${multiplier} x ${y} = ${table}`)
}


// 4. Array Element Printer: Print each element of an array.

let ePrinter = ['Hillary', `I love UI/UX design`, 56, 'I love coding', 895, true, false]

for (x = 0; x < ePrinter.length; x++){
    let result = ePrinter[x];
    console.log(result);
}



// 5. String Repeater: Repeat a string a specified number of times.

let repeater = 'My name is Hillary, i am a UI Engineer.';
let stringRepeat = 10;

for (x = 0; x < stringRepeat; x++){
    console.log(repeater);
}





// Functions:

// 1. Greeter Function: Take a person's name as input and greet them with a personalized message.

function bot(userName){
    console.log(`Hello ${userName}, Good Morning, How are you doing today?`)
}
bot('Hillary');


// 2. Area Calculator: Calculate the area of a rectangle, triangle, or circle.

function areaCalculator(length, breadth){
    if (isNaN(length) || isNaN(breadth)) {
        console.log(`Please check and input values for both parameters`)
    } else {
        let area = length * breadth;
        console.log(area)
    }
   
}

areaCalculator(5, 5);



// 3. Palindrome Checker: Determine if a given word or phrase is a palindrome
// (reads the same backward as forward).

function palindromeChecker(word){
    let splitWord = word.split('').reverse().join('');
    console.log(splitWord);

    if(splitWord === word){
        console.log(`Your word is a palindrome`)
    } else {
        console.log(`Not a palindrome`)
    }
}
palindromeChecker("eve")


// 4. Number Reverser: Reverse the digits of a given number.

function reverser(reverseNumber) {
    let number = reverseNumber.toString().split('').reverse().join('');
    number = parseInt(number, 10);

    console.log(number);
}

reverser(7383893992090009988);



// 5. Simple Sorting Function: Sort an array of numbers in ascending or
// descending order

function simpleSort(order, array){
    if(order === "ascending"){
        sorted = array.sort((a, b) => a - b);
        console.log(sorted)
    } else if (order === "descending"){
        sorted = array.sort((a, b) => b - a);
        console.log(sorted)
    }
}
let arraySort = [ 1, 54, 8, 9, 30, 657, 10, 3]
simpleSort("descending", arraySort);




// Function Parameters:
// 1. Number Adder: Take two numbers as parameters and return their sum.

function addNumber(number1, number2) {
    console.log(number1 + number2);
}

addNumber(213, 678);



// 2. Word Length Checker: Take a word as input and return its length.

function wordLength(Word) {
    let length = Word.length;
    console.log(length);
}

wordLength("Nigeria");



// 3. Age Difference Calculator: Calculate the age difference between two people
// given their birth years.

function ageGapChecker(person1Age, person2Age) {
    let ageGap = person1Age > person2Age ? person1Age - person2Age : person2Age - person1Age;
    console.log(ageGap)
}

ageGapChecker(1998, 2023);




// 4. Temperature Converter: Convert between Celsius and Fahrenheit.

function tempConverter(unit, Temperature) {

    if(!isNaN(Temperature)) {
        if (unit === 'C') {
            let tConvert = (Temperature + 32) * (9/5);
            console.log(tConvert)
        } else if (unit === "F") {
            let tConvert = (Temperature - 32) * 5/9;
            console.log(tConvert);
        } else {
            console.log(`Pls choose the right measurement unit`)
        };
    } else if (isNaN(Temperature)) {
        console.log(`Please ensure your temperature is a number`);
    } 
}

tempConverter('F',409);



// 5. Currency Converter: Convert between two different currencies

function currencyConverter(currency, amount) {
    if (!isNaN(amount)) {
        if (currency === 'Dollar') {
            let moneyConvert = amount * 1200; 
            console.log(moneyConvert);
        } else if (currency === 'Naira') {
            let moneyConvert = amount / 1200;  
            console.log(moneyConvert);
        } else {
            console.log('please, choose between only two currencies which are naira and Dollar');
        }
    } else {
        console.log('Please ensure your amount is a number');
    }
}

currencyConverter('Naira', 394);





// Arrow Functions:


// 1. Array Element Doubler: Double each element in an array.

// Array Event doubler

let arrayDoubler = (doubler) => {
    let doubledNumbers = [];

    for (x = 0; x < doubler.length; x++) {
        doubledNumbers.push(doubler[x] * 2);
    }
    console.log(doubledNumbers);
}

arrayDoubler([2, 4, 5, 7, 8, 9, 10]);



// 2. String Concatenation: Combine two strings into a single string.

// String Concatenation

const stringAdder = (string1, string2) =>  string1 + " " + string2;

console.log(stringAdder('this is the first part of the string', 'and this is the other part of the string'));



// 3. Even Number Filter: Filter an array of numbers to keep only the even ones.

//Even number filter

const evenFilter = (filter) => {

    let evenNumbers = [];

    for(let item of filter) {
        if (item % 2 == 0) {
            evenNumbers.push(item);
        }
    }

    console.log(evenNumbers);
}

evenFilter([3, 5, 6, 8, 10, 75, 100, 30, 49]);


// 4. Word Splitter: Split a sentence into an array of words.

const wordSplitter = (sentence) => {
    let splitWord = sentence.split(" ");
    console.log(splitWord);
}

wordSplitter('This is a demo of it');


// 5. Number Multiplier: Multiply a number by a given factor

const multiplyParameter = (x, y) => {
    result = x * y;
    console.log(result);
}

multiplyParameter(25, 225);


// Object Literals:
// 1. Person Object: Create an object representing a person with properties like
// name, age, and occupation.

let person = {
    name: "Robert Hillary",
    age: 16,
    occupation: "UI Engineer",
  };



  
// 2. Book Object: Create an object representing a book with properties like title,
// author, and genre.

let book = {
    title: "The Firm",
    author: "John Grisham",
    genre: "Crime thriller",
  };



  
// 3. Animal Object: Create an object representing an animal with properties like
// species, name, and age.

let animal = {
    species: "Cat",
    name: "stem",
    age: 3,
  };
  


// 4. Product Object: Create an object representing a product with properties like
// name, price, and description.

let product = {
    name: "Iphone 15",
    price: 2000000.99,
    description: "High quality camera with great security",
  };


  
// 5. Address Object: Create an object representing an address with properties
// like street, city, state, and zip code.

let address = {
    street: "Hillary street",
    city: "Benin",
    state: "Edo state",
    zipCode: "8784989",
  };





// Arrays:
// 1. Number Sorter: Sort an array of numbers in ascending or descending order.

const toBeSorted = [3,5,3,4,6,875,23434,23,55,2,45,345,342,3]

toBeSorted.sort((a,b) =>{
    return a - b
})

console.log(toBeSorted)

toBeSorted.sort(a,b)=> {
    return b - a;
}
console.log(toBeSorted)


// 2. Word Finder: Check if a given word exists within an array of words.

const wordFinder = (sentence) => {
    let splitWord = sentence.split(" ");
    console.log(splitWord);
}

wordSplitter('This is a demo of it');



// 3. Largest Number Finder: Find the largest number in an array.

let theArray = [100, 345, 780, 795, 875, 623, 195];

let theLargestValue = Math.max(...theArray)
console.log(theLargestValue);


// 4. Duplicate Remover: Remove duplicate elements from an array.

 theArray = [100, 345, 780, 795, 875, 875, 623, 195];



function makeArrayUnique(numbers) {

    for(let number of numbers) {
        if (!numbers.includes(number)) {
            let uniqueArray = [];
            uniqueArray.push(number)
            return uniqueArray
        }
    }

    console.log(uniqueArray)
}

makeArrayUnique(theArray);


// 5. Array Reverser: Reverse the order of elements in an array.

let reverseArray = ['this', 'is', 'a', 'reverse', 'array'];

let reversal = reverseArray.reverse()
console.log(reversal);




// While Loops:


// 1. Guessing Game: Keep prompting the user for a guess until they guess the
// correct number.

let userGuess = parseInt(window.prompt('Please make a guess of a number betweenS 1 and 10'));
let theLuckyGuess = 8;

while ( userGuess !== theLuckyGuess ){
    userGuess = parseInt(window.prompt('Please make a guess of a number between 1 and 10'));
}

console.log(`Congratulations you've made the right guess`)




// 2. Password Validator: Keep prompting the user for a password until it meets
// certain criteria (length, complexity).

let password = window.prompt('Please emter a password');

while (password.length < 9){
    password = window.prompt("Please your password shouldn't be less than 9 characters long");
}
console.log(password);



3. Number Counter: Count from 1 to a given number.

let number = 1;
while(number <= 10){
    console.log(number);
    number++;
}



// 4. Number factor Finder: Find all factors of a given number.

let factorFinder = 1;
let givenNumber = parseInt(window.prompt("Input any  number to find it's factors"))
let factorials = []
while(factorFinder <= givenNumber){
    if(givenNumber % factorFinder === 0){
        factorials.push(factorFinder)
    }
    factorFinder++;
}

console.log(factorials);



// 5. Simple Number Guessing Game: Generate a random number and let the user
// guess it within a limited number of tries.

let randomGuess = Math.floor(Math.random() * 10);
console.log(randomGuess);

let userGuess = parseInt(window.prompt("Please guess the lucky number to win"));
let trialCount = 5;

while (userGuess !== randomGuess && trialCount > 0) {
    trialCount--; 
    console.log(`You have ${trialCount} trial(s) left`);
    userGuess = parseInt(window.prompt("Wrong guess, please guess the lucky number to win"));
}

if (trialCount <= 0) {
    console.log(`You've exhausted your free trials`);
} else if (userGuess === randomGuess) {
    console.log(`Hurray! Your guess is ${userGuess}, and the random number is ${randomGuess}. YOU WON`);
}




//   Math Object:


//   1. Random Number Generator (use Math.random() to generate random
//   numbers)

const randomNumber = Math.random();

console.log(randomNumber)




//   2. Quadratic Equation Solver (use Math.sqrt() to find roots of a quadratic
//   equation)

const squareRoot = Math.sqrt(400);

console.log(squareRoot);




//   3. Distance Calculator (use the Pythagorean theorem to calculate distance
//   between points)

let coordinates1 = {
    x: 6, 
    y: 6,
}
let coordinates2 = {
    x: 8, 
    y: 3,
}

const distanceCalculator = (x1, y1, x2, y2) => {
    distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distance;
}

let calculatedDistance = distanceCalculator(coordinates1.x, coordinates1.y, coordinates2.x, coordinates2.y)
console.log(calculatedDistance);


//   4. Trigonometric Calculator (calculate sine, cosine, tangent using Math.sin(),
//   Math.cos(), Math.tan())

let sine = Math.sin(72);
console.log(sine)
let cosine = Math.cos(72);
console.log(cosine)
let tangent = Math.tan(72);
console.log(tangent)




//   5. Finance Calculator (calculate simple interest, compound interest, loan
//   payments)

function simpleInterest(p, r, t) {
    calculation = (p * r * t) / 100;
    return calculation
}

simpleInterest(bankDetails.principal, bankDetails.rate, bankDetails.time);

let bankDetails = {
    rate: 7,
    principal: 10000,
    time: 5,
    compounding: 4
}

function compoundInterest(p, r, t, n) {
    let power = n * t;
    let rate = r / 100;
    let calculation = p * Math.pow(1 + rate / n, power);
    console.log(calculation);
}

compoundInterest(bankDetails.principal, bankDetails.rate, bankDetails.time, bankDetails.compounding);































