const hamMenu = document.querySelector(".ham-menu");
const hamMenuService = document.querySelector(".ham-menu-service");
const hamMenuServices = document.querySelectorAll(".ham-menu-services");

const toggle = () => {
  hamMenuService.classList.toggle("active"); 
};

hamMenu.addEventListener("click", toggle);

hamMenuServices.forEach((e) => {
  e.addEventListener("click", toggle);
});

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
