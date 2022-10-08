var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //ARRAY OF MALE AKAN NAMES

/*Date MANIPULATION VARIABLES*/
var dateInput = prompt("Enter date of birth: (YYYY-MM-DD)");
var birthDate = new Date(dateInput); //uses the variable dateinput from the user prompt to create a calender date
var sikuKamili = birthDate.getDay();
var birthMonth = birthDate.getMonth();
var birthYear = birthDate.getFullYear();

console.log(sikuKamili, birthMonth, birthYear);

/*USING THE DATES TO ACCESS THE NAME LISTS*/
var genderFemale = femaleNames[sikuKamili];
var genderMale = maleNames[sikuKamili];

var jinsia = prompt("Enter the gender: (M/F)").toLowerCase(); //takes the user input and converts it to upper case

if (jinsia === "m") {
  alert("Your Akan name is " + genderMale);
} 
else {
  alert("Your Akan name is " + genderFemale);
}

if (
  jinsia === "m" ||
  jinsia === "m" ||
  jinsia === "MALE" ||
  jinsia === "FEMALE"
) {
  alert("Twende kazi");
} 
else {
  alert("Sema kimeumana");
}

var x = new Date("");
console.log(x);
// typeof(x)

if (sikuKamili >= 0 && sikuKamili <= 7 && birthMonth >= 0 && birthMonth <= 12 && birthYear >= 1900 &&
  birthYear <= 2100) {
  alert("Correct date .. onto next");
} 
else {
  alert("Wrong date format, please check");
}

//console.log(jinsia);
