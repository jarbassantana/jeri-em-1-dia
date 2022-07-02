const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const accordionItemBody = document.querySelectorAll('.accordion-item-body');



accordionItemHeaders.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle('active')
    const accordionItemBody = accordionItem.nextElementSibling;
    if(accordionItem.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }else{
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

const header = document.getElementById('js-header')




function fixedMenu() {
  if(window.pageYOffset > 80) {
    header.classList.add('fixed-menu');
  } else{
    header.classList.remove('fixed-menu');
  }
}

document.addEventListener('scroll', fixedMenu);

const btnMenu = document.getElementById('js-btn-menu-mobile');
const btnClose = document.getElementById('js-close-menu');
const overlayMenu = document.querySelector('.js-overlay');

function handleClick(event) {
  event.preventDefault();
  document.documentElement.classList.toggle('menu-opened');
  
}



btnMenu.addEventListener('click', handleClick)
btnClose.addEventListener('click', handleClick);
overlayMenu.addEventListener('click', handleClick)
