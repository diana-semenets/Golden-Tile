let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuItems = document.querySelector(".menu__list");
 menuBtn.addEventListener("click", (function() {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
        if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
    }));
menu.addEventListener("click", (e => {
    if (e.target === menu) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";
    }
}));


document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";
    }
});
   
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == menuBtn;
        const menu_is_active = menu.classList.contains("active");
    
        if (!its_menu && !its_btnMenu && menu_is_active) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

/*let menuItem = document.querySelectorAll(".menu__item");
let submenu = document.querySelectorAll(".submenu");

menuItem.forEach(item => {
    item.addEventListener("click", (e => {
        submenu.classList.toggle("active");    
    }))
}
); */
document.querySelectorAll('.menu__item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let target = event.currentTarget;
        target.querySelector('.submenu')?.classList.toggle('active');
        
    })

}) 
let searchBtn = document.querySelector(".header__search");
let dropdownSearch = document.querySelector(".dropdown-form");
searchBtn.addEventListener("click", (e => {
    dropdownSearch.classList.toggle("active");   
    searchBtn.classList.toggle("active");       
}))

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && dropdownSearch.classList.contains('active') && searchBtn.classList.contains('active')) {
        dropdownSearch.classList.remove("active");
        searchBtn.classList.remove("active");            
    }
});  

let langBtn = document.querySelector(".header__lang-list");
let submenuLang = document.querySelector(".submenu-lang");
langBtn.addEventListener("click", (e => {
    submenuLang.classList.toggle("active");   
    langBtn.classList.toggle("active");       
}))

window.onscroll = function () {
    myFunction();
  };
      
  const header = document.querySelector("header");
  const logo = document.querySelector(".header__logo");
  const sticky = header.offsetTop;
      
  function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logo.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        logo.classList.remove("sticky");
    }
  }