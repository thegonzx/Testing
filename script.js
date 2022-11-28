const nav_Toggle = document.querySelector(".header-nav-toggle");
const nav_Menu = document.querySelector(".header-nav-menu");

nav_Toggle.addEventListener("click", () => {
    nav_Menu.classList.toggle("header-nav-menu_visible");
    if (nav_Menu.classList.contains("header-nav-menu_visible")) {
        nav_Toggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        nav_Toggle.setAttribute("aria-label", "Abrir menú")
    }
});


$(document).ready(function(){
    $(window).scroll(function(){
         if (this.scrollY > 20){
             $('.header').addClass("sticky");
             $('.nav-title').addClass("sticky");
             $('.nav-menu-item').addClass("sticky");
             $('.nav-toggle').addClass("sticky");
         }else{
             $('.header').removeClass("sticky");
             $('.nav-title').removeClass("sticky");
             $('.nav-menu-item').removeClass("sticky");
             $('.nav-toggle').removeClass("sticky");
         }
     });

    // // Toggle Menu/Nav Bar

    // $('.menu_btn').click(function() {
    //    $('.nav_bar .menu').toggleClass("active");
    //    $('.menu_btn i').toggleClass("active");
    // });

    // typing animation script

    var typed = new Typed(".typed", {
        strings: ["Freelancer", "Designer", "Gamer", "Chill"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

});