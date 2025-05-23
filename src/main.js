import { openNav, closeNav } from "./assets/js/utils";
import './assets/sass/style.sass';

const d = document;

d.addEventListener("DOMContentLoaded", function () {
  d.querySelectorAll(".closebtn").forEach(function (el) {
    el.addEventListener("click", function () {
      closeNav("mySidenav");
    });
  });

  const logo = d.querySelector(".content .header .logo");
  if (logo) {
    logo.addEventListener("click", function () {
      openNav("mySidenav");
    });
  }
});

