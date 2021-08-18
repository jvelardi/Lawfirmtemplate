let text = "normal";
let btnMoney = document.getElementById('money');
let btnElder = document.getElementById('elder');
let btnInjury = document.getElementById('injury');
let btnCorporate = document.getElementById('corporate');
let btnTraffic = document.getElementById('traffic');
let btnBanking = document.getElementById('banking');

function money() {
    if (text == "normal") {
    btnMoney.innerHTML = "<p>We might be dirty but that doesn't mean your money has to be.<p>";
    text = "changed";
    } else {
        btnMoney.innerHTML = "<h1>Money Laundering</h1><p>Click For More Info</p>";
        text = "normal";
    }
}

function elder() {
  if (text == "normal") {
  btnElder.innerHTML = "<p>Whether it's social security, medicare or estate law, we love making money off the elderly just as much as they love playing bingo.<p>";
  text = "changed";
  } else {
      btnElder.innerHTML = "<h1>Elder Law</h1><p>Click For More Info</p>";
      text = "normal";
  }
}

function injury() {
  if (text == "normal") {
  btnInjury.innerHTML = "<p>Whether you fell by accident or on purpose we'll make sure you get every penny you're entitled to.<p>";
  text = "changed";
  } else {
      btnInjury.innerHTML = "<h1>Personal Injury</h1><p>Click For More Info</p>";
      text = "normal";
  }
}

function corporate() {
  if (text == "normal") {
  btnCorporate.innerHTML = "<p>Although we may have a hand in putting people out of work, but think of it this way. At least someone is benefiting, and that is us.<p>";
  text = "changed";
  } else {
      btnCorporate.innerHTML = "<h1>Corporate Law</h1><p>Click For More Info</p>";
      text = "normal";
  }
}

function traffic() {
  if (text == "normal") {
  btnTraffic.innerHTML = "<p>Whether it's hitting an old lady with a shopping cart or getting a DWI, as long as you pay the retainer we'll happily keep you on the road. <p>";
  text = "changed";
  } else {
      btnTraffic.innerHTML = "<h1>Traffic Violations</h1><p>Click For More Info</p>";
      text = "normal";
  }
}

function banking() {
  if (text == "normal") {
  btnBanking.innerHTML = "<p>We believe banks and corporations are people so it's only fair we're just as dirty in their best interest as we are with our regular clients.<p>";
  text = "changed";
  } else {
      btnBanking.innerHTML = "<h1>Banking and Finance</h1><p>Click For More Info</p>";
      text = "normal";
  }
}

let lawyerSearch = document.getElementById("lawyerSearch");

function inputValue() {
  return lawyerSearch.value;
}

function lawSearch(event) {
    if (inputValue() === "Pill Cosby" && event.which === 13) {
      window.location.href="https://www.w3schools.com/jsref/event_onkeypress.asp";
    }
}

lawyerSearch.addeventlistener("keypress", lawSearch);

// let lawyerSearch = document.getElementById('lawyerSearch');
// let ul = document.getElementById('lawyerUL');
// let li = ul.getElementsByTagName('li');

// for (i = 0; i < li.length; i++) {
//     txtValue = li.textContent || li.innerText;
// }
