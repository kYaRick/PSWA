"use strict"
/**
 * Стягую масиви елементів, яким відповідає 
 */
let el1 = document.getElementsByClassName('content__link');
let el2 = document.getElementsByClassName('_submenu_link');

for (let i = 0; i < el1.length; i++) {
  el1[i].addEventListener("mouseenter", showSub, false);
  el1[i].addEventListener("mouseleave", hideSub, false);
}

for (let i = 0; i < el2.length; i++) {
  el2[i].addEventListener("mouseenter", showSub, false);
  el2[i].addEventListener("mouseleave", hideSub, false);
}

function showSub() {
  if (this.children.length > 1) {
    this.children[1].style.height = "auto";
    this.children[1].style.overflow = "visible";
    this.children[1].style.opacity = "1";
  } else {
    return false;
  }
}

function hideSub() {
  if (this.children.length > 1) {
    this.children[1].style.height = "0px";
    this.children[1].style.overflow = "hidden";
    this.children[1].style.opacity = "0";
  } else {
    return false;
  }
} 