const progressCircle = document.querySelector('.progress-circle');
const valueInput = document.querySelector('input');
const toggles = document.querySelectorAll('.toggle');
const toggleCircle = document.querySelectorAll('.toggleCircle');

function setValue(v) {
    const val = Math.max(0, Math.min(100, v));
    const deg = (val / 100) * 360;
    progressCircle.style.background = `conic-gradient(#3f7bff 0deg ${deg}deg, #dfe6ee ${deg}deg 360deg)`;
}


function toggleSwitch(el, state) {
    debugger
    if (state) el.classList.add('on');
    else el.classList.remove('on');
}


toggles[0].addEventListener('click', () => {
    toggles[0].classList.toggle('on');

    if (toggles[0].classList.contains('on')) {
        toggleCircle[0].style.translate = '100%'
        progressCircle.style.animation = 'spin 3s infinite linear';
    } else {
        toggleCircle[0].style.translate = ''
        progressCircle.style.animation = 'none';
    }
});


toggles[1].addEventListener('click', () => {
    toggles[1].classList.toggle('on');
    if(toggles[1].classList.contains('on')){
        toggleCircle[1].style.translate = '100%'
    }
    else{
        toggleCircle[1].style.translate = ''
    }
    progressCircle.style.display = toggles[1].classList.contains('on') ? 'none' : 'flex';
});


valueInput.addEventListener('input', () => setValue(valueInput.value));


setValue(valueInput.value);