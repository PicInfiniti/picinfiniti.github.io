import { openNav, closeNav } from "../utils";
import '../../sass/pay.sass';

const d = document;

d.addEventListener("DOMContentLoaded", function () {
  d.querySelectorAll(".closebtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
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

