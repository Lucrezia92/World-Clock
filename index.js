let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losangelesElement.querySelector(".date");
let losAngelesTimeElement = losangelesElement.querySelector(".time");
losAngelesTimeElement = moment();

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss");
//Los Angeles
