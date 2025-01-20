// libraries +++++++++++++++++++++++++++++++++++++
import $ from "jquery";
import { openNav, closeNav } from "../utils";
// libraries -------------------------------------

// sass ++++++++++++++++++++++++++++++++++++++++++
import '../../sass/pay.sass';
// sass ------------------------------------------

$(".closebtn").click(function () {
  closeNav("mySidenav")
})

$(".content .header .logo").click(function () {
  openNav("mySidenav")
})


