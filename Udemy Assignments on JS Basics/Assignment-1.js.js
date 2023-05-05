let country, continent, population;
country = "India";
continent = "Asia";
population = 4;
console.log(continent + "," + country + "," + population);
let isaland = "andaman";

console.log(continent + "," + country + "," + population);

let siraj = 1988 - 2023;
console.log(siraj);
/* LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/
let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

/* 
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

language = "tamil";

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

console.log(population / 2);
population++;
console.log(population);
let Finland_population = 6;

let compare_population = population > Finland_population;

console.log(compare_population);
console.log(population < 33);
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let marks_mass = 78;
let John_mass = 92;
let marks_height = 1.69;
let John_height = 1.95;

let marks_BMI = marks_mass / marks_height ** 2;
let john_bmi = John_mass / (John_height * John_height);
let MarkHigherBMI = marks_BMI > john_bmi;
console.log(marks_BMI, john_bmi, MarkHigherBMI);

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
let result;
population = 130;
if (population > 33) {
  result = `${country} 's population is above average'`;
} else {
  result = `${country} 's population is 22 million below average'`;
}
console.log(result);
population = 4;
/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:*/
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
*/

/* 
let numNeighbours=prompt('How many neighbour countries does your country have?');

if (Number(numNeighbours)===1){
console.log("Only 1 border")
}
else if(numNeighbours>1){
console.log("More than 1 border")
}
else {
   console.log("No border") 
}

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/

if (isIsland && language == "English" && population < 50) {
  console.log("You should live in India ");
} else {
  console.log("India does not meet your criteria");
}

/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/
language = "spanish";
let swicth_result;
switch (language) {
  case "chinese":
  case "mandarin":
    swicth_result = "MOST number of native speakers!";
    break;
  case "english":
    swicth_result = "3rd place in number of native speakers";
    break;
  case "spanish":
    swicth_result = "2nd place in number of native speakers";
    break;
  case "hindi":
    swicth_result = "4th place in number of native speakers ";
    break;
  case "arabic":
    swicth_result = "5th place in number of native speakers";
    break;
  default:
    swicth_result = "Great language too";
}
console.log(swicth_result);

/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
population = 130;
console.log(
  `${country} population is ${population > 33 ? "above" : "below"} average`
);
population = 4;

let bill_value = 275;

let tip =
  bill_value > 50 && bill_value < 300
    ? (bill_value * 15) / 100
    : (bill_value * 20) / 100;
console.log(`The bill was ${bill_value}, the tips was ${tip}, and the 
total value ${bill_value + tip}`);
