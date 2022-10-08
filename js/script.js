var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
var maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]; //ARRAY OF MALE AKAN NAMES


var dateInput = prompt("Enter date of birth: ");
console.log(dateInput)

var birthDate = new Date(dateInput) //uses the variable dateinput from the user prompt to create a calender date
console.log(birthDate)

var sikuKamili = birthDate.getDay();
console.log(sikuKamili);

var genderFemale = femaleNames[sikuKamili];
var genderMale = maleNames[sikuKamili];
console.log(genderMale, genderFemale);