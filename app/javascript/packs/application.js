// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import * as bootstrap from "bootstrap"
document.addEventListener("DOMContentLoaded", function (event) {
  // https://getbootstrap.com/docs/5.0/components/popovers/#example-enable-popovers-everywhere
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
  // https://getbootstrap.com/docs/5.0/components/tooltips/#example-enable-tooltips-everywhere
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})
import "stylesheets/application.scss"
import "bootstrap-icons/font/bootstrap-icons.css"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
