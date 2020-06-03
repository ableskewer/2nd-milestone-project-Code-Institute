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
  }
});

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


//Get the modal and the open-modal-button
var modal = document.getElementById("modal");
var btns = document.getElementsByClassName("today");
var btnsLength = btns.length;

// Get the appropriate color butten in the modal
var green = document.getElementById("greenOK");
var yellow = document.getElementById("yellowOK");
var red = document.getElementById("redOK");
var clear = document.getElementById("clear-color");

// When any day is clicked a modal appears and you can click one of 4 buttons.
for (var i = 0; i < btnsLength; i++) {
  btns[i].onclick = function () {
    modal.style.display = "block";

    var clickedButton = this;

    green.onclick = function () {
      clickedButton.style.backgroundColor = "#90EE90";
      modal.style.display = "none";
    };
    yellow.onclick = function () {
      clickedButton.style.backgroundColor = "#FFFF33";
      modal.style.display = "none";
    };
    red.onclick = function () {
      clickedButton.style.backgroundColor = "#FF2B00";
      modal.style.display = "none";
    };
    clear.onclick = function () {
      clickedButton.style.backgroundColor = "";
      modal.style.display = "none";
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

        //If 3 month plan, 6 months wont show
    if (localStorage.getItem("duration") == "3 month") {
    var table6months = document.getElementById("table-six-months")
    table6months.style.display = "none";
    }

        //If 6 month plan, all will show
    if (localStorage.getItem("duration") == "6 month") {
    var table6months = document.getElementById("table-six-months")
    table6months.style.display = "table-row-group";
    }

    //Table 1   -- Distance: Half-Marathon -- Difficulty: Beginner -- Duration: 3 months
    if (localStorage.getItem("distance") == "Half Marathon" && localStorage.getItem("difficulty") == "Beginner" && localStorage.getItem("duration") == "3 month" ) {
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
        //40 individual values 
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
    if (localStorage.getItem("distance") == "Half Marathon" && localStorage.getItem("difficulty") == "Intermediate" && localStorage.getItem("duration") == "3 month" ) {
    $(".monday").html("Walk");
    
    }

    //Table 3   -- Distance: Half-Marathon -- Difficulty: Beginner -- Duration: 6 months
    if (localStorage.getItem("distance") == "Half Marathon" && localStorage.getItem("difficulty") == "Beginner" && localStorage.getItem("duration") == "6 month" ) {
    $(".monday").html("Walk");
    
    }

    //Table 4   -- Distance: Half-Marathon -- Difficulty: Intermediate -- Duration: 6 months
    if (localStorage.getItem("distance") == "Half Marathon" && localStorage.getItem("difficulty") == "Intermediate" && localStorage.getItem("duration") == "6 month" ) {
    $(".monday").html("Walk");
    
    }

    //Table 5   -- Distance: Marathon -- Difficulty: Beginner -- Duration: 3 months
    if (localStorage.getItem("distance") == "Marathon" && localStorage.getItem("difficulty") == "Beginner" && localStorage.getItem("duration") == "3 month" ) {
    $(".monday").html("Walk");
    
    }

    //Table 6   -- Distance: Marathon -- Difficulty: Intermediate -- Duration: 3 months
    if (localStorage.getItem("distance") == "Marathon" && localStorage.getItem("difficulty") == "Intermediate" && localStorage.getItem("duration") == "3 month" ) {
    $(".monday").html("Walk");
    
    }

    //Table 7   -- Distance: Marathon -- Difficulty: Beginner -- Duration: 6 months
    if (localStorage.getItem("distance") == "Marathon" && localStorage.getItem("difficulty") == "Beginner" && localStorage.getItem("duration") == "6 month" ) {
    $(".monday").html("Walk");
    
    }

    //Table 8   -- Distance: Marathon -- Difficulty: Intermediate -- Duration: 6 months
    if (localStorage.getItem("distance") == "Marathon" && localStorage.getItem("difficulty") == "Intermediate" && localStorage.getItem("duration") == "6 month" ) {
    $(".monday").html("Walk");
    
    }

   

