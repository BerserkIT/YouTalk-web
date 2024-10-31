"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.querySelector('.header__burger-menu');
  var burgerMenuButton = document.querySelector('.header__burger-menu__button');
  var body = document.querySelector('body');
  burgerMenuButton.addEventListener('click', function (e) {
    burgerMenu.classList.toggle('_active');
    burgerMenuButton.classList.toggle('_active');
    body.classList.toggle('_lock');
  });
  var dropdownMenus = document.querySelectorAll('.header__burger-menu__dropdown');
  if (dropdownMenus !== undefined && dropdownMenus.length > 0) {
    dropdownMenus.forEach(function (menu) {
      menu.querySelector('.header__burger-menu__dropdown__button').addEventListener('click', function (e) {
        var parent = this.parentNode;
        dropdownMenus.forEach(function (item) {
          if (item === parent) {
            if (parent.classList.contains('_active')) {
              parent.classList.remove('_active');
            } else {
              parent.classList.add('_active');
            }
          } else {
            if (item.classList.contains('_active')) {
              item.classList.remove('_active');
            }
          }
        });
      });
    });
  }
});