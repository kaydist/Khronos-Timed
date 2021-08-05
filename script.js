//DOM is not responding 
// script for countdown timer starts here
const timer = () =>{
    //set the deadline
const deadline = Number(new Date("Dec 31, 2023"));

function countDown(){
    //get present date
const now = Number(new Date());
//find the difference
let distance = deadline - now;

//run math to convert
let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor (distance / (1000 * 60 * 60) % 24) ;
let mins = Math.floor (distance / (1000 * 60) % 60) ;
let secs = Math.floor (distance / (1000) % 60) ;

//display
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = mins;
document.getElementById("secs").innerHTML = secs;

};

// repeat countdown ever one second
setInterval(countDown, 1000);
}

window.addEventListener("load", timer)
// script for count down timer end here




// Email validation starts here

//Need to build inner html that reponds 

//call submit button
let validationButton = document.getElementById("submit");

function emailValidation(){
//get email value
var emailInput = document.getElementById('email').value;

//get the container for status
let status = document.getElementById("status");

//check if valid
if(emailInput.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(\.[a-zA-Z])*$/)){  
//if valid, display with textContent in container
status.textContent = "Submitting...";
    
}else if(emailInput === ""){
    status.textContent ="Please enter an email address."
}else{
    status.textContent ="Please enter a valid email address."}
}

//Email validation ends here
//---------------------------------------------------------

//this is script to control the height of the details container and with respect to the height of the body articles(presently absolute) 

function autoheight(){
let details = document.getElementById("details");
let content = document.querySelector(".tab-content-active");

// Get the height of the body-article
const articleHeight = content.offsetHeight;

//do necessary math
detailsHeight = articleHeight + 400 + "px";
console.log(detailsHeight);
//add height to the container
details.style.height = detailsHeight;
}

window.addEventListener("load", autoheight)



const tabs = document.querySelector(".details-sections");
const tabButton = document.querySelectorAll(".tab-button");
const tabcontents = document.querySelectorAll(".tab-content");

tabs.onclick = e => {
  const id = e.target.dataset.forTab;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("tab-button-active");
    });
    e.target.classList.add("tab-button-active");

    tabcontents.forEach(content => {
      content.classList.remove("tab-content-active");
    });
    const element = document.getElementById(id);
    element.classList.add("tab-content-active");
  }

  autoheight()
  
    
}


//---------------------------------------------------------





//write on to activate the function on click of the tab change 
