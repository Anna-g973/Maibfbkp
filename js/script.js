let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
const arrow = document.querySelector('#arrow');
const inside__active = document.querySelector('.inside__active');
const accordionItems = document.querySelectorAll('.menu__item')
const dNone = document.querySelector('#children')
const arrow_two = document.querySelector('#arrow_two')

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// Open children elements
inside__active.addEventListener('click', function(){
    if(dNone.classList.contains('d-none')){
        dNone.classList.remove('d-none') 
        arrow_two.classList.add('arrow_two_open') 
    } else {
        dNone.classList.add('d-none')
        arrow_two.classList.remove('arrow_two_open') 
    }
})

!function(){"use strict";document.addEventListener("click",function(t){const e=t.target.closest("[data-easy-toggle]");if(e){t.preventDefault();let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");try{document.querySelectorAll("[data-easy-toggle]").forEach(t=>{t.hasAttribute("data-easy-parallel")||t===e||document.querySelector(t.getAttribute("data-easy-toggle")).classList.remove(t.getAttribute("data-easy-class"))}),document.querySelector(a).classList.toggle(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}}if(!e){let e=document.querySelectorAll("[data-easy-rcoe]");Array.from(e).forEach.call(e,function(e){let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");if(!t.target.closest(a))try{document.querySelector(a).classList.remove(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}})}})}();


accordionItems.forEach((item) => {
	item.preventDefault;
    const accordionHeader = item.querySelector('.link__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})


const toggleItem =  (item) => {
    
    const accordionContent = item.querySelector('.inside__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
        arrow.classList.remove('arrow-open')
        dNone.classList.add('d-none')
        arrow_two.classList.remove('arrow_two_open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
        arrow.classList.add('arrow-open')
    }
}