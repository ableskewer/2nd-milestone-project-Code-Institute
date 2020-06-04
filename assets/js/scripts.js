// .................... Scripts for all pages ............... //

// Navbar scroll down hide/up show
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// .................... Scripts for index.html ............... //

        //None so far

// .................... Scripts for getstarted.html ............... //

    //Saving user input from getstarted.html to localStorage

var inputName = document.getElementById("inputName");
var optionDistance = document.getElementById("distance");
var optionDifficulty = document.getElementById("difficulty");
var optionDuration = document.getElementById("duration");
var btnLetsGo = document.getElementById("btnLetsGo");

$(function () {
  if ($("body").is(".getStarted")) {
    btnLetsGo.onclick = function () {
      var valueName = inputName.value;
      var valueDistance = optionDistance.value;
      var valueDifficulty = optionDifficulty.value;
      var valueDuration = optionDuration.value;

      localStorage.clear();
      localStorage.setItem("name", valueName);
      localStorage.setItem("distance", valueDistance);
      localStorage.setItem("difficulty", valueDifficulty);
      localStorage.setItem("duration", valueDuration);
    };
  }
});

// .................... Scripts for keeptrack.html ............... //

//Loading the user input from localeStorage creating a custom title for the training plan
$(function () {
  if ($("body").is(".keepTrack")) {

    var lsOutputName = document.getElementById("lsOutputName");
    var Name = localStorage.name;
    var Distance = localStorage.distance;
    var Difficulty = localStorage.difficulty;
    var Duration = localStorage.duration;
    lsGetStartedFormOutput.innerHTML += `${Name}'s ${Duration} ${Difficulty} <br> ${Distance} Training Plan`;

    //cycles through localStorage retrieving background-color for Ids with "week" in them
    for ( var i = 0; i < localStorage.length; ++i ) {
       dayId = localStorage.key(i)
       bgColor = localStorage.getItem(localStorage.key(i));
       
       if (dayId.startsWith("week") == true)
       document.getElementById(dayId).style.backgroundColor = bgColor;
    }
  }


//Background-color change on Hover for each day, monday through sunday                          ***Currently Not working as intended***
if ($(".today").css("background-color") == "") {
  $(".today").mouseover(function () {
    $(this).css("background-color", "yellow");
  });
}

if ($(".today").css("background-color") == "yellow") {
  $(".today").mouseleave(function () {
    $(".today").css("background-color", "");
  });
}

// When any day is clicked a modal appears and you can click one of 4 buttons
//Get the modal and the open-modal-button
var modal = document.getElementById("modal");
var btns = document.getElementsByClassName("today");
var btnsLength = btns.length;

// Get the appropriate color butten in the modal
var green = document.getElementById("greenOK");
var yellow = document.getElementById("yellowOK");
var red = document.getElementById("redOK");
var clear = document.getElementById("clear-color");

//Looping through the clickable elements, giving 4 options to modify
for (var i = 0; i < btnsLength; i++) {
  btns[i].onclick = function () {
    modal.style.display = "block";
    var clickedButton = this;
    var thisId = this.id;

    green.onclick = function () {
      clickedButton.style.backgroundColor = "#90EE90";
      modal.style.display = "none";
      var thisBgColor = document.getElementById(thisId).style.backgroundColor;
      localStorage.setItem(thisId, thisBgColor);
    };

    yellow.onclick = function () {
      clickedButton.style.backgroundColor = "#FFFF33";
      modal.style.display = "none";
      var thisBgColor = document.getElementById(thisId).style.backgroundColor;
      localStorage.setItem(thisId, thisBgColor);
    };

    red.onclick = function () {
      clickedButton.style.backgroundColor = "#FF2B00";
      modal.style.display = "none";
      var thisBgColor = document.getElementById(thisId).style.backgroundColor;
      localStorage.setItem(thisId, thisBgColor);
    };
    
    clear.onclick = function () {
      clickedButton.style.backgroundColor = "";
      modal.style.display = "none";
      var thisBgColor = document.getElementById(thisId).style.backgroundColor;
      localStorage.setItem(thisId, thisBgColor);
    };
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Table, this code shows/hides the appropriate training table depending on 3 parameters
//All in all 8 different tables can be shown. Table 1-8.

//If 3 month plan, 6 months wont show - else it will
if (localStorage.getItem("duration") == "3 month") {
  var table6months = document.getElementById("table-6-months");
  table6months.style.display = "none";
} else {
  table6months.style.display = "table-row-group";
}

//Table 1   -- Distance: Half-Marathon -- Difficulty: Beginner -- Duration: 3 months
if (
  localStorage.getItem("distance") == "Half Marathon" &&
  localStorage.getItem("difficulty") == "Beginner" &&
  localStorage.getItem("duration") == "3 month"
) {
  $(".monday").html("Walk");
  $(".mondaytext").html("15-30 min");
  $(".tuesdaytext").html("Easy effort");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("30 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("15-30 min");
  //individual values for non-repeating workout days
  $("#week1tuesdayUpper").html("Run 3K");
  $("#week1thursdayUpper").html("Run 3K");
  $("#week1saturdayUpper").html("Run 4K");
  $("#week2tuesdayUpper").html("Run 3K");
  $("#week2thursdayUpper").html("Run 3K");
  $("#week2saturdayUpper").html("Run 5K");
  $("#week3tuesdayUpper").html("Run 3K");
  $("#week3thursdayUpper").html("Run 3K");
  $("#week3saturdayUpper").html("Run 4K");
  $("#week4tuesdayUpper").html("Run 4K");
  $("#week4thursdayUpper").html("Run 4K");
  $("#week4saturdayUpper").html("Run 6K");
  $("#week5tuesdayUpper").html("Run 4K");
  $("#week5thursdayUpper").html("Run 4K");
  $("#week5saturdayUpper").html("Run 10K");
  $("#week6tuesdayUpper").html("Run 3K");
  $("#week6thursdayUpper").html("Run 3K");
  $("#week6saturdayUpper").html("Run 5K");
  $("#week7tuesdayUpper").html("Run 5K");
  $("#week7thursdayUpper").html("Run 5K");
  $("#week7saturdayUpper").html("Run 8K");
  $("#week8tuesdayUpper").html("Run 5K");
  $("#week8thursdayUpper").html("Run 5K");
  $("#week8saturdayUpper").html("Run 7K");
  $("#week9tuesdayUpper").html("Run 5K");
  $("#week9thursdayUpper").html("Run 5K");
  $("#week9saturdayUpper").html("Run 14K");
  $("#week10tuesdayUpper").html("Run 6K");
  $("#week10thursdayUpper").html("Run 6K");
  $("#week10saturdayUpper").html("Run 8K");
  $("#week11tuesdayUpper").html("Run 4K");
  $("#week11thursdayUpper").html("Run 4K");
  $("#week11saturdayUpper").html("Run 12K");
  $("#week12tuesdayUpper").html("Run 6K");
  $("#week12thursdayUpper").html("Run 6K");
  $("#week12saturdayUpper").html("Run 8K");
  $("#week13mondayUpper").html("Off");
  $("#week13mondayLower").html("Full Rest");
  $("#week13tuesdayUpper").html("Run 3K");
  $("#week13wednesdayUpper").html("Off");
  $("#week13wednesdayLower").html("Full Rest");
  $("#week13thursdayUpper").html("Run 3K");
  $("#week13saturdayUpper").html("Walk");
  $("#week13saturdayLower").html("30 min");
  $("#week13sundayUpper").html("Half Marathon");
  $("#week13sundayLower").html("Good Luck");
}

//Table 2   -- Distance: Half-Marathon -- Difficulty: Intermediate -- Duration: 3 months
if (
  localStorage.getItem("distance") == "Half Marathon" &&
  localStorage.getItem("difficulty") == "Intermediate" &&
  localStorage.getItem("duration") == "3 month"
) {
  $(".mondaytext").html("Easy effort");
  $(".tuesday").html("Interval Run");
  $(".tuesdaytext").html("30-45 min");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("30-45 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("15-30 min");
  //individual values for non-repeating workout days
  $("#week1mondayUpper").html("Run 5K");
  $("#week1thursdayUpper").html("Run 5K");
  $("#week1saturdayUpper").html("Run 8K");
  $("#week2mondayUpper").html("Run 5K");
  $("#week2thursdayUpper").html("Run 5K");
  $("#week2saturdayUpper").html("Run 6K");
  $("#week3mondayUpper").html("Run 6K");
  $("#week3thursdayUpper").html("Run 5K");
  $("#week3saturdayUpper").html("Run 8K");
  $("#week4mondayUpper").html("Run 5K");
  $("#week4thursdayUpper").html("Run 5K");
  $("#week4saturdayUpper").html("Run 6K");
  $("#week5mondayUpper").html("Run 6K");
  $("#week5thursdayUpper").html("Run 6K");
  $("#week5saturdayUpper").html("Run 12K");
  $("#week6mondayUpper").html("Run 5K");
  $("#week6thursdayUpper").html("Run 5K");
  $("#week6saturdayUpper").html("Run 8K");
  $("#week7mondayUpper").html("Run 7K");
  $("#week7thursdayUpper").html("Run 7K");
  $("#week7saturdayUpper").html("Run 9K");
  $("#week8mondayUpper").html("Run 7K");
  $("#week8thursdayUpper").html("Run 7K");
  $("#week8saturdayUpper").html("Run 12K");
  $("#week9mondayUpper").html("Run 7K");
  $("#week9thursdayUpper").html("Run 5K");
  $("#week9saturdayUpper").html("Run 18K");
  $("#week10mondayUpper").html("Run 7K");
  $("#week10thursdayUpper").html("Run 7K");
  $("#week10saturdayUpper").html("Run 12K");
  $("#week11mondayUpper").html("Run 5K");
  $("#week11thursdayUpper").html("Run 5K");
  $("#week11saturdayUpper").html("Run 20K");
  $("#week12mondayUpper").html("Run 5K");
  $("#week12thursdayUpper").html("Run 5K");
  $("#week12saturdayUpper").html("Run 8K");
  $("#week13mondayUpper").html("Run 5K");
  $("#week13tuesdayUpper").html("Walk");
  $("#week13tuesdayLower").html("15-30 min");
  $("#week13wednesdayUpper").html("Off");
  $("#week13wednesdayLower").html("Full Rest");
  $("#week13thursdayUpper").html("Run 3K");
  $("#week13thursdayLower").html("Easy effort");
  $("#week13saturdayUpper").html("Walk");
  $("#week13saturdayLower").html("30-45 min");
  $("#week13sundayUpper").html("Half Marathon");
  $("#week13sundayLower").html("Good Luck");
}

//Table 3   -- Distance: Half-Marathon -- Difficulty: Beginner -- Duration: 6 months
if (
  localStorage.getItem("distance") == "Half Marathon" &&
  localStorage.getItem("difficulty") == "Beginner" &&
  localStorage.getItem("duration") == "6 month"
) {
  $(".monday").html("Walk");
  $(".mondaytext").html("15-30 min");
  $(".tuesdaytext").html("Easy effort");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("30 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("15-30 min");
  //individual values for non-repeating workout days
  $("#week1tuesdayUpper").html("Run 2K");
  $("#week1thursdayUpper").html("Run 2K");
  $("#week1saturdayUpper").html("Run 4K");
  $("#week2tuesdayUpper").html("Run 3K");
  $("#week2thursdayUpper").html("Run 3K");
  $("#week2saturdayUpper").html("Run 4K");
  $("#week3tuesdayUpper").html("Run 3K");
  $("#week3thursdayUpper").html("Run 3K");
  $("#week3saturdayUpper").html("Run 5K");
  $("#week4tuesdayUpper").html("Run 3K");
  $("#week4thursdayUpper").html("Run 3K");
  $("#week4saturdayUpper").html("Run 7K");
  $("#week5tuesdayUpper").html("Run 3K");
  $("#week5thursdayUpper").html("Run 3K");
  $("#week5saturdayUpper").html("Run 5K");
  $("#week6tuesdayUpper").html("Run 3K");
  $("#week6thursdayUpper").html("Run 3K");
  $("#week6saturdayUpper").html("Run 6K");
  $("#week7tuesdayUpper").html("Run 4K");
  $("#week7thursdayUpper").html("Run 4K");
  $("#week7saturdayUpper").html("Run 6K");
  $("#week8tuesdayUpper").html("Run 5K");
  $("#week8thursdayUpper").html("Run 5K");
  $("#week8saturdayUpper").html("Run 6K");
  $("#week9tuesdayUpper").html("Run 4K");
  $("#week9thursdayUpper").html("Run 4K");
  $("#week9saturdayUpper").html("Run 10K");
  $("#week10tuesdayUpper").html("Run 4K");
  $("#week10thursdayUpper").html("Run 4K");
  $("#week10saturdayUpper").html("Run 6K");
  $("#week11tuesdayUpper").html("Run 3K");
  $("#week11thursdayUpper").html("Run 3K");
  $("#week11saturdayUpper").html("Run 5K");
  $("#week12tuesdayUpper").html("Run 5K");
  $("#week12thursdayUpper").html("Run 5K");
  $("#week12saturdayUpper").html("Run 10K");
  $("#week13tuesdayUpper").html("Run 5K");
  $("#week13thursdayUpper").html("Run 5K");
  $("#week13saturdayUpper").html("Run 8K");
  $("#week14tuesdayUpper").html("Run 4K");
  $("#week14thursdayUpper").html("Run 4K");
  $("#week14saturdayUpper").html("Run 7K");
  $("#week15tuesdayUpper").html("Run 5K");
  $("#week15thursdayUpper").html("Run 5K");
  $("#week15saturdayUpper").html("Run 7K");
  $("#week16tuesdayUpper").html("Run 5K");
  $("#week16thursdayUpper").html("Run 5K");
  $("#week16saturdayUpper").html("Run 12K");
  $("#week17tuesdayUpper").html("Run 5K");
  $("#week17thursdayUpper").html("Run 5K");
  $("#week17saturdayUpper").html("Run 14K");
  $("#week18tuesdayUpper").html("Run 3K");
  $("#week18thursdayUpper").html("Run 6K");
  $("#week18saturdayUpper").html("Run 8K");
  $("#week19tuesdayUpper").html("Run 6K");
  $("#week19thursdayUpper").html("Run 6K");
  $("#week19saturdayUpper").html("Run 8K");
  $("#week20tuesdayUpper").html("Run 5K");
  $("#week20thursdayUpper").html("Run 5K");
  $("#week20saturdayUpper").html("Run 7K");
  $("#week21tuesdayUpper").html("Run 7K");
  $("#week21thursdayUpper").html("Run 5K");
  $("#week21saturdayUpper").html("Run 16K");
  $("#week22tuesdayUpper").html("Run 6K");
  $("#week22thursdayUpper").html("Run 5K");
  $("#week22saturdayUpper").html("Run 8K");
  $("#week23tuesdayUpper").html("Run 5K");
  $("#week23thursdayUpper").html("Run 5K");
  $("#week23saturdayUpper").html("Run 18K");
  $("#week24tuesdayUpper").html("Run 4K");
  $("#week24thursdayUpper").html("Run 7K");
  $("#week24saturdayUpper").html("Run 12K");
  $("#week25tuesdayUpper").html("Run 6K");
  $("#week25thursdayUpper").html("Run 6K");
  $("#week25saturdayUpper").html("Run 8K");
  $("#week26tuesdayUpper").html("Run 2K");
  $("#week26wednesdayUpper").html("Off");
  $("#week26wednesdayLower").html("Full Rest");
  $("#week26thursdayUpper").html("Run 3K");
  $("#week26thursdayLower").html("Easy effort");
  $("#week26saturdayUpper").html("Walk");
  $("#week26saturdayLower").html("30 min");
  $("#week26sundayUpper").html("Marathon");
  $("#week26sundayLower").html("Good Luck");
}

//Table 4   -- Distance: Half-Marathon -- Difficulty: Intermediate -- Duration: 6 months
if (
  localStorage.getItem("distance") == "Half Marathon" &&
  localStorage.getItem("difficulty") == "Intermediate" &&
  localStorage.getItem("duration") == "6 month"
) {
  $(".mondaytext").html("Easy effort");
  $(".tuesday").html("Interval Run");
  $(".tuesdaytext").html("45-60 min");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("60 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("30-45 min");
  //individual values for non-repeating workout days
  $("#week1mondayUpper").html("Run 5K");
  $("#week1thursdayUpper").html("Run 5K");
  $("#week1saturdayUpper").html("Run 8K");
  $("#week2mondayUpper").html("Run 6K");
  $("#week2thursdayUpper").html("Run 6K");
  $("#week2saturdayUpper").html("Run 8K");
  $("#week3mondayUpper").html("Run 5K");
  $("#week3thursdayUpper").html("Run 5K");
  $("#week3saturdayUpper").html("Run 6K");
  $("#week4mondayUpper").html("Run 6K");
  $("#week4thursdayUpper").html("Run 6K");
  $("#week4saturdayUpper").html("Run 8K");
  $("#week5mondayUpper").html("Run 6K");
  $("#week5thursdayUpper").html("Run 5K");
  $("#week5saturdayUpper").html("Run 8K");
  $("#week6mondayUpper").html("Run 6K");
  $("#week6thursdayUpper").html("Run 6K");
  $("#week6saturdayUpper").html("Run 9K");
  $("#week7mondayUpper").html("Run 5K");
  $("#week7thursdayUpper").html("Run 5K");
  $("#week7saturdayUpper").html("Run 6K");
  $("#week8mondayUpper").html("Run 5K");
  $("#week8thursdayUpper").html("Run 5K");
  $("#week8saturdayUpper").html("Run 10K");
  $("#week9mondayUpper").html("Run 6K");
  $("#week9thursdayUpper").html("Run 6K");
  $("#week9saturdayUpper").html("Run 12K");
  $("#week10mondayUpper").html("Run 5K");
  $("#week10thursdayUpper").html("Run 5K");
  $("#week10saturdayUpper").html("Run 9K");
  $("#week11mondayUpper").html("Run 5K");
  $("#week11thursdayUpper").html("Run 5K");
  $("#week11saturdayUpper").html("Run 8K");
  $("#week12mondayUpper").html("Run 6K");
  $("#week12thursdayUpper").html("Run 6K");
  $("#week12saturdayUpper").html("Run 15K");
  $("#week13mondayUpper").html("Run 5K");
  $("#week13thursdayUpper").html("Run 5K");
  $("#week13saturdayUpper").html("Run 9K");
  $("#week14mondayUpper").html("Run 6K");
  $("#week14thursdayUpper").html("Run 6K");
  $("#week14saturdayUpper").html("Run 9K");
  $("#week15mondayUpper").html("Run 7K");
  $("#week15thursdayUpper").html("Run 7K");
  $("#week15saturdayUpper").html("Run 12K");
  $("#week16mondayUpper").html("Run 6K");
  $("#week16thursdayUpper").html("Run 6K");
  $("#week16saturdayUpper").html("Run 10K");
  $("#week17mondayUpper").html("Run 7K");
  $("#week17thursdayUpper").html("Run 5K");
  $("#week17saturdayUpper").html("Run 18K");
  $("#week18mondayUpper").html("Run 6K");
  $("#week18thursdayUpper").html("Run 6K");
  $("#week18saturdayUpper").html("Run 15K");
  $("#week19mondayUpper").html("Run 7K");
  $("#week19thursdayUpper").html("Run 7K");
  $("#week19saturdayUpper").html("Run 12K");
  $("#week20mondayUpper").html("Run 6K");
  $("#week20thursdayUpper").html("Run 6K");
  $("#week20saturdayUpper").html("Run 16K");
  $("#week21mondayUpper").html("Run 5K");
  $("#week21thursdayUpper").html("Run 5K");
  $("#week21saturdayUpper").html("Run 20K");
  $("#week22mondayUpper").html("Run 7K");
  $("#week22thursdayUpper").html("Run 7K");
  $("#week22saturdayUpper").html("Run 18K");
  $("#week23mondayUpper").html("Run 5K");
  $("#week23thursdayUpper").html("Run 5K");
  $("#week23saturdayUpper").html("Run 16K");
  $("#week24mondayUpper").html("Run 5K");
  $("#week24thursdayUpper").html("Run 5K");
  $("#week24saturdayUpper").html("Run 12K");
  $("#week25mondayUpper").html("Run 5K");
  $("#week25thursdayUpper").html("Run 5K");
  $("#week25saturdayUpper").html("Run 8K");
  $("#week26mondayUpper").html("Run 5K");
  $("#week26tuesdayUpper").html("Walk");
  $("#week26tuesdayLower").html("30 min");
  $("#week26wednesdayUpper").html("Off");
  $("#week26wednesdayLower").html("Full Rest");
  $("#week26thursdayUpper").html("Run 3K");
  $("#week26saturdayUpper").html("Walk");
  $("#week26saturdayLower").html("30-45 min");
  $("#week26sundayUpper").html("Half Marathon");
  $("#week26sundayLower").html("Good Luck");
}

//Table 5   -- Distance: Marathon -- Difficulty: Beginner -- Duration: 3 months
    
if (
  localStorage.getItem("distance") == "Marathon" &&
  localStorage.getItem("difficulty") == "Beginner" &&
  localStorage.getItem("duration") == "3 month"
) {
  $(".monday").html("Walk");
  $(".mondaytext").html("45 min");
  $(".tuesdaytext").html("Easy effort");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("45 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("30 min");
  //individual values for non-repeating workout days
  $("#week1tuesdayUpper").html("Run 3K");
  $("#week1thursdayUpper").html("Run 3K");
  $("#week1saturdayUpper").html("Run 5K");
  $("#week2tuesdayUpper").html("Run 3K");
  $("#week2thursdayUpper").html("Run 4K");
  $("#week2saturdayUpper").html("Run 6K");
  $("#week3tuesdayUpper").html("Run 5K");
  $("#week3thursdayUpper").html("Run 5K");
  $("#week3saturdayUpper").html("Run 7K");
  $("#week4tuesdayUpper").html("Run 5K");
  $("#week4thursdayUpper").html("Run 5K");
  $("#week4saturdayUpper").html("Run 9K");
  $("#week5tuesdayUpper").html("Run 4K");
  $("#week5thursdayUpper").html("Run 5K");
  $("#week5saturdayUpper").html("Run 8K");
  $("#week6tuesdayUpper").html("Run 6K");
  $("#week6thursdayUpper").html("Run 6K");
  $("#week6saturdayUpper").html("Run 12K");
  $("#week7tuesdayUpper").html("Run 6K");
  $("#week7thursdayUpper").html("Run 6K");
  $("#week7saturdayUpper").html("Run 18K");
  $("#week8tuesdayUpper").html("Run 5K");
  $("#week8thursdayUpper").html("Run 6K");
  $("#week8saturdayUpper").html("Run 10K");
  $("#week9tuesdayUpper").html("Run 5K");
  $("#week9thursdayUpper").html("Run 5K");
  $("#week9saturdayUpper").html("Run 28K");
  $("#week10tuesdayUpper").html("Run 5K");
  $("#week10thursdayUpper").html("Run 5K");
  $("#week10saturdayUpper").html("Run 22K");
  $("#week11tuesdayUpper").html("Run 6K");
  $("#week11thursdayUpper").html("Run 6K");
  $("#week11saturdayUpper").html("Run 16K");
  $("#week12tuesdayUpper").html("Run 7K");
  $("#week12thursdayUpper").html("Run 7K");
  $("#week12saturdayUpper").html("Run 12K");
  $("#week13tuesdayUpper").html("Run 3K");
  $("#week13wednesdayUpper").html("Off");
  $("#week13wednesdayLower").html("Full Rest");
  $("#week13thursdayUpper").html("Run 3K");
  $("#week13saturdayUpper").html("Walk");
  $("#week13saturdayLower").html("30-45 min");
  $("#week13sundayUpper").html("Marathon");
  $("#week13sundayLower").html("Good Luck");
}

//Table 6   -- Distance: Marathon -- Difficulty: Intermediate -- Duration: 3 months
if (
  localStorage.getItem("distance") == "Marathon" &&
  localStorage.getItem("difficulty") == "Intermediate" &&
  localStorage.getItem("duration") == "3 month"
) {
  $(".mondaytext").html("Easy effort");
  $(".tuesday").html("Interval Run");
  $(".tuesdaytext").html("30-45 min");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("60 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("15-30 min");
  //individual values for non-repeating workout days
  $("#week1mondayUpper").html("Run 5K");
  $("#week1thursdayUpper").html("Run 5K");
  $("#week1saturdayUpper").html("Run 10K");
  $("#week2mondayUpper").html("Run 7K");
  $("#week2thursdayUpper").html("Run 7K");
  $("#week2saturdayUpper").html("Run 12K");
  $("#week3mondayUpper").html("Run 10K");
  $("#week3thursdayUpper").html("Run 10K");
  $("#week3saturdayUpper").html("Run 16K");
  $("#week4mondayUpper").html("Run 7K");
  $("#week4thursdayUpper").html("Run 7K");
  $("#week4saturdayUpper").html("Run 18K");
  $("#week5mondayUpper").html("Run 10K");
  $("#week5thursdayUpper").html("Run 10K");
  $("#week5saturdayUpper").html("Run 16K");
  $("#week6mondayUpper").html("Run 8K");
  $("#week6thursdayUpper").html("Run 10K");
  $("#week6saturdayUpper").html("Run 22K");
  $("#week7mondayUpper").html("Run 8K");
  $("#week7thursdayUpper").html("Run 10K");
  $("#week7saturdayUpper").html("Run 16K");
  $("#week8mondayUpper").html("Run 10K");
  $("#week8thursdayUpper").html("Run 10K");
  $("#week8saturdayUpper").html("Run 26K");
  $("#week9mondayUpper").html("Run 7K");
  $("#week9thursdayUpper").html("Run 10K");
  $("#week9saturdayUpper").html("Run 32K");
  $("#week10mondayUpper").html("Run 7K");
  $("#week10thursdayUpper").html("Run 12K");
  $("#week10saturdayUpper").html("Run 22K");
  $("#week11mondayUpper").html("Run 12K");
  $("#week11thursdayUpper").html("Run 12K");
  $("#week11saturdayUpper").html("Run 18K");
  $("#week12mondayUpper").html("Run 10K");
  $("#week12thursdayUpper").html("Run 10K");
  $("#week12saturdayUpper").html("Run 15K");
  $("#week13mondayUpper").html("Run 5K");
  $("#week13tuesdayUpper").html("Walk");
  $("#week13tuesdayLower").html("15-30 min");
  $("#week13wednesdayUpper").html("Off");
  $("#week13wednesdayLower").html("Full Rest");
  $("#week13thursdayUpper").html("Run 3K");
  $("#week13thursdayLower").html("Easy effort");
  $("#week13saturdayUpper").html("Walk");
  $("#week13saturdayLower").html("30-45 min");
  $("#week13sundayUpper").html("Marathon");
  $("#week13sundayLower").html("Good Luck");
}

//Table 7   -- Distance: Marathon -- Difficulty: Beginner -- Duration: 6 months
if (
  localStorage.getItem("distance") == "Marathon" &&
  localStorage.getItem("difficulty") == "Beginner" &&
  localStorage.getItem("duration") == "6 month"
) {
  $(".monday").html("Walk");
  $(".mondaytext").html("30 min");
  $(".tuesdaytext").html("Easy effort");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("45 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("walk");
  $(".sundaytext").html("30 min");
  //individual values for non-repeating workout days
  $("#week1tuesdayUpper").html("Run 3K");
  $("#week1thursdayUpper").html("Run 3K");
  $("#week1saturdayUpper").html("Run 4K");
  $("#week2tuesdayUpper").html("Run 3K");
  $("#week2thursdayUpper").html("Run 3K");
  $("#week2saturdayUpper").html("Run 5K");
  $("#week3tuesdayUpper").html("Run 3K");
  $("#week3thursdayUpper").html("Run 3K");
  $("#week3saturdayUpper").html("Run 4K");
  $("#week4tuesdayUpper").html("Run 4K");
  $("#week4thursdayUpper").html("Run 4K");
  $("#week4saturdayUpper").html("Run 6K");
  $("#week5tuesdayUpper").html("Run 4K");
  $("#week5thursdayUpper").html("Run 4K");
  $("#week5saturdayUpper").html("Run 10K");
  $("#week6tuesdayUpper").html("Run 3K");
  $("#week6thursdayUpper").html("Run 3K");
  $("#week6saturdayUpper").html("Run 5K");
  $("#week7tuesdayUpper").html("Run 5K");
  $("#week7thursdayUpper").html("Run 5K");
  $("#week7saturdayUpper").html("Run 8K");
  $("#week8tuesdayUpper").html("Run 5K");
  $("#week8thursdayUpper").html("Run 5K");
  $("#week8saturdayUpper").html("Run 7K");
  $("#week9tuesdayUpper").html("Run 5K");
  $("#week9thursdayUpper").html("Run 5K");
  $("#week9saturdayUpper").html("Run 14K");
  $("#week10tuesdayUpper").html("Run 6K");
  $("#week10thursdayUpper").html("Run 6K");
  $("#week10saturdayUpper").html("Run 8K");
  $("#week11tuesdayUpper").html("Run 4K");
  $("#week11thursdayUpper").html("Run 4K");
  $("#week11saturdayUpper").html("Run 12K");
  $("#week12tuesdayUpper").html("Run 6K");
  $("#week12thursdayUpper").html("Run 6K");
  $("#week12saturdayUpper").html("Run 18K");
  $("#week13tuesdayUpper").html("Run 6K");
  $("#week13thursdayUpper").html("Run 6K");
  $("#week13saturdayUpper").html("Run 12K");
  $("#week14tuesdayUpper").html("Run 8K");
  $("#week14thursdayUpper").html("Run 8K");
  $("#week14saturdayUpper").html("Run 12K");
  $("#week15tuesdayUpper").html("Run 8K");
  $("#week15thursdayUpper").html("Run 8K");
  $("#week15saturdayUpper").html("Run 14K");
  $("#week16tuesdayUpper").html("Run 7K");
  $("#week16thursdayUpper").html("Run 7K");
  $("#week16saturdayUpper").html("Run 20K");
  $("#week17tuesdayUpper").html("Run 5K");
  $("#week17thursdayUpper").html("Run 8K");
  $("#week17saturdayUpper").html("Run 14K");
  $("#week18tuesdayUpper").html("Run 8K");
  $("#week18thursdayUpper").html("Run 8K");
  $("#week18saturdayUpper").html("Run 16K");
  $("#week19tuesdayUpper").html("Run 8K");
  $("#week19thursdayUpper").html("Run 8K");
  $("#week19saturdayUpper").html("Run 14K");
  $("#week20tuesdayUpper").html("Run 8K");
  $("#week20thursdayUpper").html("Run 8K");
  $("#week20saturdayUpper").html("Run 20K");
  $("#week21tuesdayUpper").html("Run 8K");
  $("#week21thursdayUpper").html("Run 5K");
  $("#week21saturdayUpper").html("Run 32K");
  $("#week22tuesdayUpper").html("Run 8K");
  $("#week22thursdayUpper").html("Run 8K");
  $("#week22saturdayUpper").html("Run 16K");
  $("#week23tuesdayUpper").html("Run 10K");
  $("#week23thursdayUpper").html("Run 10K");
  $("#week23saturdayUpper").html("Run 30K");
  $("#week24tuesdayUpper").html("Run 8K");
  $("#week24thursdayUpper").html("Run 8K");
  $("#week24saturdayUpper").html("Run 12K");
  $("#week25tuesdayUpper").html("Run 8K");
  $("#week25thursdayUpper").html("Run 8K");
  $("#week25saturdayUpper").html("Run 10K");
  $("#week26mondayUpper").html("Off");
  $("#week26mondayLower").html("Full Rest");
  $("#week26tuesdayUpper").html("Run 5K");
  $("#week26wednesdayUpper").html("Off");
  $("#week26wednesdayLower").html("Full Rest");
  $("#week26thursdayUpper").html("Run 3K");
  $("#week26saturdayUpper").html("Walk");
  $("#week26saturdayLower").html("45 min");
  $("#week26sundayUpper").html("Marathon");
  $("#week26sundayLower").html("Good Luck");
}

//Table 8   -- Distance: Marathon -- Difficulty: Intermediate -- Duration: 6 months
if (
  localStorage.getItem("distance") == "Marathon" &&
  localStorage.getItem("difficulty") == "Intermediate" &&
  localStorage.getItem("duration") == "6 month"
) {
  $(".mondaytext").html("Easy effort");
  $(".tuesday").html("Interval Run");
  $(".tuesdaytext").html("45-60 min");
  $(".wednesday").html("Cross training");
  $(".wednesdaytext").html("60 min");
  $(".thursdaytext").html("Easy effort");
  $(".friday").html("Off");
  $(".fridaytext").html("Full Rest");
  $(".saturdaytext").html("Race Pace");
  $(".sunday").html("Walk");
  $(".sundaytext").html("30-45 min");
  //individual values for non-repeating workout days
  $("#week1mondayUpper").html("Run 5K");
  $("#week1thursdayUpper").html("Run 5K");
  $("#week1saturdayUpper").html("Run 10K");
  $("#week2mondayUpper").html("Run 6K");
  $("#week2thursdayUpper").html("Run 6K");
  $("#week2saturdayUpper").html("Run 12K");
  $("#week3mondayUpper").html("Run 7K");
  $("#week3thursdayUpper").html("Run 7K");
  $("#week3saturdayUpper").html("Run 12K");
  $("#week4mondayUpper").html("Run 7K");
  $("#week4thursdayUpper").html("Run 7K");
  $("#week4saturdayUpper").html("Run 10K");
  $("#week5mondayUpper").html("Run 10K");
  $("#week5thursdayUpper").html("Run 10K");
  $("#week5saturdayUpper").html("Run 16K");
  $("#week6mondayUpper").html("Run 7K");
  $("#week6thursdayUpper").html("Run 7K");
  $("#week6saturdayUpper").html("Run 22K");
  $("#week7mondayUpper").html("Run 7K");
  $("#week7thursdayUpper").html("Run 7K");
  $("#week7saturdayUpper").html("Run 18K");
  $("#week8mondayUpper").html("Run 7K");
  $("#week8thursdayUpper").html("Run 7K");
  $("#week8saturdayUpper").html("Run 10K");
  $("#week9mondayUpper").html("Run 10K");
  $("#week9thursdayUpper").html("Run 10K");
  $("#week9saturdayUpper").html("Run 16K");
  $("#week10mondayUpper").html("Run 7K");
  $("#week10thursdayUpper").html("Run 10K");
  $("#week10saturdayUpper").html("Run 22K");
  $("#week11mondayUpper").html("Run 8K");
  $("#week11thursdayUpper").html("Run 10K");
  $("#week11saturdayUpper").html("Run 22K");
  $("#week12mondayUpper").html("Run 7K");
  $("#week12thursdayUpper").html("Run 10K");
  $("#week12saturdayUpper").html("Run 15K");
  $("#week13mondayUpper").html("Run 8K");
  $("#week13thursdayUpper").html("Run 10K");
  $("#week13saturdayUpper").html("Run 16K");
  $("#week14mondayUpper").html("Run 10K");
  $("#week14thursdayUpper").html("Run 10K");
  $("#week14saturdayUpper").html("Run 18K");
  $("#week15mondayUpper").html("Run 10K");
  $("#week15thursdayUpper").html("Run 10K");
  $("#week15saturdayUpper").html("Run 26K");
  $("#week16mondayUpper").html("Run 7K");
  $("#week16thursdayUpper").html("Run 10K");
  $("#week16saturdayUpper").html("Run 22K");
  $("#week17mondayUpper").html("Run 7K");
  $("#week17thursdayUpper").html("Run 10K");
  $("#week17saturdayUpper").html("Run 32K");
  $("#week18mondayUpper").html("Run 10K");
  $("#week18thursdayUpper").html("Run 10K");
  $("#week18saturdayUpper").html("Run 18K");
  $("#week19mondayUpper").html("Run 7K");
  $("#week19thursdayUpper").html("Run 12K");
  $("#week19saturdayUpper").html("Run 22K");
  $("#week20mondayUpper").html("Run 8K");
  $("#week20thursdayUpper").html("Run 10K");
  $("#week20saturdayUpper").html("Run 36K");
  $("#week21mondayUpper").html("Run 12K");
  $("#week21thursdayUpper").html("Run 12K");
  $("#week21saturdayUpper").html("Run 18K");
  $("#week22mondayUpper").html("Run 12K");
  $("#week22thursdayUpper").html("Run 12K");
  $("#week22saturdayUpper").html("Run 28K");
  $("#week23mondayUpper").html("Run 10K");
  $("#week23thursdayUpper").html("Run 10K");
  $("#week23saturdayUpper").html("Run 20K");
  $("#week24mondayUpper").html("Run 12K");
  $("#week24thursdayUpper").html("Run 10K");
  $("#week24saturdayUpper").html("Run 15K");
  $("#week25mondayUpper").html("Run 10K");
  $("#week25thursdayUpper").html("Run 10K");
  $("#week25saturdayUpper").html("Run 12K");
  $("#week26mondayUpper").html("Run 5K");
  $("#week26tuesdayUpper").html("Off");
  $("#week26tuesdayLower").html("Full Rest");
  $("#week26wednesdayUpper").html("Off");
  $("#week26wednesdayLower").html("Full Rest");
  $("#week26thursdayUpper").html("Run 3K");
  $("#week26saturdayUpper").html("Walk");
  $("#week26saturdayLower").html("30-45 min");
  $("#week26sundayUpper").html("Marathon");
  $("#week26sundayLower").html("Good Luck");
}
});