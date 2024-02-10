/*const aside = document.getElementById('aside');
const displayBtn = document.getElementById('display');

const displaySideBar = function() {
    aside.classList.toggle('hidden');
    displayBtn.classList.toggle('hidden');
}*/

// const accordion = document.getElementsByClassName('accordion');
const openAccordion = document.getElementsByClassName('open-accordion');
const closeAccordion = document.getElementsByClassName('close-accordion');
const panel = document.getElementsByClassName('panel');

const openAcc = () => {
    for (let i = 0; i < openAccordion.length; i++){
        openAccordion[i].addEventListener("click", function(){
            this.classList.add('hidden');

            closeAccordion[i].classList.remove('hidden');
            panel[i].style.display = "none";
        }); 
    }
    for (let j = 0; j < closeAccordion.length; j++){
        closeAccordion[j].addEventListener("click", function() {
            this.classList.add('hidden');
            
            openAccordion[j].classList.remove('hidden');
            panel[j].style.display = "block";
        })   
    }
}
    
openAcc();

// get the sidebar menu when media screen is at max-width of 680px
const sidebarMenu = document.getElementById('display-sidebar-menu');

sidebarMenu.addEventListener("click", function(){
    sidebarMenu.classList.toggle("active");
})

/*for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        let j, k;
        for (j = 0; j < openAccordion.length; j++) {
          openAccordion[j].classList.add('hidden');
        }
        this.classList.remove('hidden');
    })
    for (let x = 0; x < panel.length; x++){
        if (panel[x].style.display == "block"){
            panel[x].style.display = "none"
        }else {
            panel[x].style.display = "block";
        }
    }
    
}*/

