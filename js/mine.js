$(document).ready(function (){
    $('.item-spoylers-contend-pathway').click(function(event){

        if($('.item-spoylers-contend-pathway').hasClass('one')){
            $('.item-spoylers-contend-pathway').not($(this)).removeClass('active');
            $('.item-spoylers-contend-pathway__text').not($(this).next());
        }


        $(this).toggleClass('active');
    });
});



"use strict";

window.addEventListener('load', windowLoad);

// click blocks


function windowLoad() {
    document.addEventListener('click', documentActions);
}

// animation blocks

function animationsBlocks(callvackFunction) {
// animation blocks-header

    function animationsBlocksHeader() {
        function animationsBlocksHeaderScroll() {
            const header = document.querySelector("header");
            if (window.pageYOffset > 20) header.classList.add("header__color"); else header.classList.remove("header__color");
        }
        window.addEventListener("scroll", animationsBlocksHeaderScroll);
    }
    animationsBlocksHeader();


    const animationBlocksPartners = () =>{
        const blockPartners = document.getElementById("partners")
        const blockItemOne = document.querySelector(".item-partners_one"),
              blockItemTwo = document.querySelector(".item-partners_two"),
              blockItemThre = document.querySelector(".item-partners_thre"),
              blockItemFore = document.querySelector(".item-partners_fore"),
              blockItemFive = document.querySelector(".item-partners_five");

           
        
    const scrolled = window.pageYOffset;
        //console.log(scrolled)
    // Визначте верхню межу елемента blockPartners
    const blockPartnersTop = blockPartners.offsetTop;
    //console.log(blockPartnersTop)

    // Визначте висоту елемента blockPartners
    const blockPartnersHeight = blockPartners.offsetHeight;
   
        
    if (scrolled > blockPartnersTop - window.innerHeight && scrolled < blockPartnersTop + blockPartnersHeight ) {
        blockItemOne.classList.add("item-partners_one-active");
        blockItemTwo.classList.add("item-partners_two-active");
        blockItemThre.classList.add("item-partners_thre-active");
        blockItemFore.classList.add("item-partners_fore-active");
        blockItemFive.classList.add("item-partners_five-active");


    } else {

        blockItemTwo.classList.remove("item-partners_two-active");
        blockItemOne.classList.remove("item-partners_one-active");
        blockItemThre.classList.remove("item-partners_thre-active");
        blockItemFore.classList.remove("item-partners_fore-active");
        blockItemFive.classList.remove("item-partners_five-active");
    }

    }
    window.addEventListener("scroll", animationBlocksPartners);
   
    callvackFunction()
}
animationsBlocks();

// nav menu

function documentActions(e) {
   const targetElement = e.target

   //Burger

  
   if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  
    // Зміна відображення логотипу при відкритті/закритті меню
    const logoBur = document.querySelector('.header__logo-burgers');
    logoBur.classList.toggle('visible', document.documentElement.classList.contains('menu-open'));

    const hourBur = document.querySelector('.header-hour-burgers');
    hourBur.classList.toggle('visible', document.documentElement.classList.contains('menu-open'));
  }
 

   //Animation-scrol

   if (targetElement.closest('[data-goto]')) {

      const goTo = targetElement.closest('[data-goto]').dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector('.header').offsetHeight;

      if (goToElement) {
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth"
         });
      }
      e.preventDefault();

   }



   

   //Delegation
   /*if (targetElement.closest('items-works__type') && !targetElement.closest('active')) {
      const activeElement = document.querySelector('.items-works__type.active');
      const elements = document.querySelectorAll('.items-works__items');
      const elementType = targetElement.dataset.workType;

      activeElement.closest.remove('active');
      targetElement.closest.add('active');
   }*/
// Burger



}

