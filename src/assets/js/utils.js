import $ from "jquery";
import moment from "moment-jalaali";

export function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('Clock').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (10 > i) {
    i = "0" + i
  };
  return i;
}
startTime()

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var month = new Array(12);
month[0] = "Far";
month[1] = "Ord";
month[2] = "Kho";
month[3] = "Tir";
month[4] = "Mor";
month[5] = "Sha";
month[6] = "Meh";
month[7] = "Aba";
month[8] = "Aza";
month[9] = "Dey";
month[10] = "Bah";
month[11] = "Esf";

var n = weekday[d.getDay()];
var Moment = moment()

var DATE = n + '-' + Moment.jDate() + '-' + month[Moment.jMonth()] + '-' + Moment.jYear()
$('#jdate').text(DATE);

export function openNav(ID) {
  const sidenav = document.getElementById(ID);
  const currentWidth = parseFloat(window.getComputedStyle(sidenav).width); // Get the current width in pixels

  if (currentWidth > 10) {
    // If the width is greater than 10px, close the sidenav
    sidenav.style.width = "0";
    document.body.style.backgroundColor = "white";
  } else {
    // If the width is 10px or less, open the sidenav
    sidenav.style.width = "max(15vw, 15vh)";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}


export function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
