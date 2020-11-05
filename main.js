//////// headear loader
const headerTitle = () => {
   const headerBig =
      document.querySelector(".header__title--big") === null
         ? false
         : document.querySelector(".header__title--big");
   const headerSmall =
      document.querySelector(".header__title--small") === null
         ? false
         : document.querySelector(".header__title--small");
   const headerNext =
      document.querySelector(".header__title--next") === null
         ? false
         : document.querySelector(".header__title--next");

   headerBig && headerBig.classList.toggle("header__title--big-grow");

   headerSmall && headerSmall.classList.toggle("header__title--small-grow");

   headerNext && headerNext.classList.toggle("header__title--next-grow");
};

window.addEventListener("load", () => {
   headerTitle();

   ////observer

   const ladders = document.querySelectorAll(".article__image--ladder");
   const figures = document.querySelectorAll(".article__image--figure");
   const anchor = document.getElementById("menu-anchor");
   const buttonUp = document.querySelector(".button-top");

   const options = {
      rootMargin: "0px 0px -150px 0px",
   };

   const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) {
            return;
         } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
         }
      });
   }, options);

   ladders.forEach((fader) => {
      appearOnScroll.observe(fader);
   });

   ///////////////////////////////////

   const figuresOptions = {
      threshold: 0,
      rootMargin: "0px 0px -150px 0px",
   };

   const appearOnScrollFigures = new IntersectionObserver(function (
      entries,
      appearOnScrollFigures
   ) {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
         } else {
            entry.target.classList.add("appear");
         }
      });
   },
   figuresOptions);

   figures.forEach((fader) => {
      appearOnScrollFigures.observe(fader);
   });

   //////////////////////////////////

   const buttonOptions = {
      rootMargin: "0px 0px -50px 0px",
   };

   const appearOnScrollButton = new IntersectionObserver(function (entries, appearOnScrollButton) {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            buttonUp.classList.remove("appear");
         } else {
            buttonUp.classList.add("appear");
         }
      });
   }, buttonOptions);

   appearOnScrollButton.observe(anchor);

   //////// Smooth scroll

   $(".menu__links a").smoothScroll({
      offset: -30,
      afterScroll: function () {
         $(this).closest(".menu__links").find("a").removeClass("active");
         $(this).addClass("active");
      },
   });

   $(".button-top a").smoothScroll({
      offset: 0,
      afterScroll: function () {
         $(this).closest(".button-top").find("a").removeClass("active");
         $(this).addClass("active");
      },
   });

   //////// Menu Button

   const menuButton = document.querySelector(".menu__button");
   const menuLinks = document.querySelector(".menu__links");
   const toggleMenu = () => {
      if (menuButton != null) {
         menuButton.addEventListener("click", function () {
            if (this.innerHTML === "Menu") {
               this.innerHTML = "Close";
               menuLinks.classList.add("menu__links--open");
            } else {
               this.innerHTML = "Menu";
               menuLinks.classList.remove("menu__links--open");
            }
         });
      }
      return;
   };
   toggleMenu();
});
