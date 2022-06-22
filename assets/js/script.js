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
