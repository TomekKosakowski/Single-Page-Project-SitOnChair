document.addEventListener('DOMContentLoaded', function () {

var aboutUs = document.querySelector('.menuList>a');
var gallery = document.getElementById('gallery');
var contact = document.getElementById('contact');
var submenu = document.querySelector('.submenu');
var submenu1 = document.querySelector('.submenu1');
var submenu2 = document.querySelector('.submenu2');


aboutUs.addEventListener('mouseover', function (event) {
    submenu.style.display = 'block';
});
    aboutUs.addEventListener('mouseout', function (event) {
        submenu.style.display = 'none';
    });

    gallery.addEventListener('mouseover', function (event) {
        submenu1.style.display = 'block';
    });
    gallery.addEventListener('mouseout', function (event) {
        submenu1.style.display = 'none';
    });

    contact.addEventListener('mouseover', function (event) {
        submenu2.style.display = 'block';
    });
    contact.addEventListener('mouseout', function (event) {
        submenu2.style.display = 'none';
    });

var firstChair = document.querySelector('.claire');
var secondChair = document.querySelector('.child');
var elementToHide = document.querySelector('.whiteChair');
var textToHide = document.querySelector('.childOnChair');

firstChair.addEventListener('mouseover', function (event) {
    elementToHide.style.display = 'none';
});
    firstChair.addEventListener('mouseout', function (event) {
        elementToHide.style.display = 'inline-block';
    });

    secondChair.addEventListener('mouseover', function (event) {
        textToHide.style.display = 'none';
    });
    secondChair.addEventListener('mouseout', function (event) {
        textToHide.style.display = 'inline-block';
    });









});