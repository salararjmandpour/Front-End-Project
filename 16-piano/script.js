const note = document.querySelector('.nowplaying');
const keys = document.querySelectorAll('.key');
const hints = document.querySelectorAll('.hints');
window.addEventListener('keydown', function (e) {

    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(key);
    if (!key) return;

    const keyNote = key.getAttribute('data-note');


    //>------------------------ add class animation for key

    key.classList.add('playing');

    note.innerHTML = keyNote;

    audio.currentTime = 0;

    audio.play();

    


});

function removeTransitionend() {
    this.classList.remove('playing');
}

hints.forEach(function (elm, index) {
    elm.style = `transition-delay:${index * 50}ms`;
});

keys.forEach(key =>key.addEventListener('transitionend',removeTransitionend));