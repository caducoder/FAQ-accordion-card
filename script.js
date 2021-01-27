const accordion = document.getElementsByClassName("label");
const panel = document.getElementsByClassName("content");

for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        var setClasses = !this.classList.contains('active');
        setClass(accordion, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    })
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}