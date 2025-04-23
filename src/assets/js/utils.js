import moment from "moment-jalaali";

export function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  const clockEl = document.getElementById('Clock');
  if (clockEl) {
    clockEl.innerHTML = `${h}:${m}:${s}`;
  }

  setTimeout(startTime, 500);
}

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

startTime();

// Custom weekday and month arrays
const d = new Date();
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf"];

const n = weekday[d.getDay()];
const Moment = moment();

const DATE = `${n}-${Moment.jDate()}-${month[Moment.jMonth()]}-${Moment.jYear()}`;

const jdateEl = document.getElementById('jdate');
if (jdateEl) {
  jdateEl.textContent = DATE;
}

export function openNav(ID) {
  const sidenav = document.getElementById(ID);
  if (!sidenav) return;

  const currentWidth = parseFloat(window.getComputedStyle(sidenav).width);

  if (currentWidth > 10) {
    sidenav.style.width = "0";
    document.body.style.backgroundColor = "white";
  } else {
    sidenav.style.width = "max(15vw, 15vh)";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}

export function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  if (!sidenav) return;

  sidenav.style.width = "0";
  document.body.style.backgroundColor = "white";
}
