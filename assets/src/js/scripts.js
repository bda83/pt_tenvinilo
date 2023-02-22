const hamburgerIcon = document.querySelector(".hamburger-icon");
const body = document.querySelector("body");
const navMenu = document.querySelector(".menu-mobile");
const itemsInGrid = document.getElementsByClassName("item-grid");
const navSubmenu = document.querySelector(".submenu-mobile");
const backToMenu = document.querySelector(".back-menu");

/*                                                  //
//      MENU (mobile)                               //
//      open/close with hamburger icon              //
*/                                                  //

// open mobile menu with hamburger icon
hamburgerIcon.addEventListener("click", () => {
    /* Toggle class */
    hamburgerIcon.classList.toggle("active");
    body.classList.toggle("blocked");
    navMenu.classList.toggle("opened");
    navSubmenu.classList.remove("opened-submenu");
    /* Toggle aria-expanded value */
    let menuOpen = navMenu.classList.contains("opened");
    let newMenuOpenStatus = menuOpen;
    hamburgerIcon.setAttribute("aria-expanded", newMenuOpenStatus);
})


/*                                                  //
//      SUBMENU (mobile)                            //
//      open/close with options in menu             //
*/                                                  //

// open mobile submenu
for (var i=0; i< itemsInGrid.length; i++) {
    itemsInGrid[i].addEventListener("click",function() {
        /* Toggle active class */
        navMenu.classList.toggle("opened-submenu");
        navSubmenu.classList.toggle("opened-submenu");
    });
}


// close mobile submenu and go to mobile menu
backToMenu.addEventListener("click", () => {
    navMenu.classList.remove("opened-submenu");
    navSubmenu.classList.remove("opened-submenu");
})


/*                                                  //
//      MENU & SUBMENU (mobile)                     //
//      Close when any option is selected           //
*/                                                  //

document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    body.classList.remove("blocked");
    navMenu.classList.remove("opened");
    navSubmenu.classList.remove("opened-submenu");
}))


/*                                                  //
//      GENERATE RANDOM GRADIENT (extras)           //
//      Delete                                      //
*/                                                  //

function generate() {
    for ( var j = 0; j < 5; j++ ) {

        var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
        
        function populate(a) {
        for ( var i = 0; i < 6; i++ ) {
            var x = Math.round( Math.random() * 14 );
            var y = hexValues[x];
            a += y;
        }
        return a;
        }
        
        var newColor1 = populate('#');
        var newColor2 = populate('#');
        var angle = Math.round( Math.random() * 360 );
        
        var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

        var boxes= document.getElementsByClassName("content");
        
        boxes[j].style.background = gradient;  
  }}
  
  document.onload = generate();