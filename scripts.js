
document.addEventListener("DOMContentLoaded", e => {
const panels = document.querySelectorAll('.panel');
function toggleOpen() {

    for (let panel of panels){
        let something = panel.classList.contains('open');
        console.log(something);
        if(panel.classList.contains('open')){
            panel.classList.remove('open');
        }
    }
    this.classList.add('open');

}
function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('openActive');
    };
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});
