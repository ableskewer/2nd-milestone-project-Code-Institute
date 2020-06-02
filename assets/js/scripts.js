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
    lsGetStartedFormOutput.innerHTML += `${Name}'s ${Duration} ${Distance} ${Difficulty}'s Training Plan`;
  }
});


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

    //Table, this code shows the correct training table depending on 3 parameters
        //All in all 8 different tables can be shown.
// if (localStorage.getItem("distance") == "Half Marathon")  {
//     var table = document.getElementById("table-center");
//     table.style.display = "none"
// }
