// libraries +++++++++++++++++++++++++++++++++++++
import $ from "jquery";
import { openNav, closeNav } from "./assets/js/utils";
// libraries -------------------------------------

// sass ++++++++++++++++++++++++++++++++++++++++++
import './assets/sass/style.sass';
// sass ------------------------------------------

$(".closebtn").click(function () {
  closeNav("mySidenav")
})

$(".content .header .logo").click(function () {
  openNav("mySidenav")
})


