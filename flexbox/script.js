/*const aside = document.getElementById('aside');
const displayBtn = document.getElementById('display');

const displaySideBar = function() {
    aside.classList.toggle('hidden');
    displayBtn.classList.toggle('hidden');
}*/

const accordion = document.getElementsByClassName('accordion');
const openAccordion = document.getElementsByClassName('open-accordion');
const closeAccordion = document.getElementsByClassName('close-accordion');

for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        let j, k;
        for (j = 0; j < openAccordion.length; j++) {
          openAccordion[j].classList.add('hidden');
        }
        this.classList.remove('hidden');
    })
}