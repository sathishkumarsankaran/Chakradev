$(function () {

	"use strict";

  function validateForm() {
    var x = document.forms["patient"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var x = document.forms["patient"]["fmobile"].value;
    if (x == "") {
      alert("Mobile Number must be filled out");
      return false;
    }
    var x = document.forms["patient"]["femail"].value;
    if (x == "") {
      alert("Email Address must be filled out");
      return false;
    }
  }
})
