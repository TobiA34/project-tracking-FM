 

 function toggleMenu() {
   const navbarMenu = document.getElementById("navbarMenu");
   const navbarToggle = document.querySelector(".navbar-toggle");

   // Toggle the 'show' class for expanding/collapsing the menu
   navbarMenu.classList.toggle("show");

   // Switch between hamburger and X icon
   if (navbarMenu.classList.contains("show")) {
     navbarToggle.innerHTML = "&#10005;"; // X icon
   } else {
     navbarToggle.innerHTML = "&#9776;"; // Hamburger icon
   }
 }