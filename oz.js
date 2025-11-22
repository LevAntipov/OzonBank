function progressComponentApi(
    initialValueState,
    rotationSpeed,
    isAnimated
) {
    const progressCircle = document.querySelector('.progressCircle');
    const valueInput = document.querySelector('.progressInput');
    const toggles = document.querySelectorAll('.toggle');
    const toggleCircle = document.querySelectorAll('.toggleCircle');

    valueInput.value = initialValueState

    function setValue(v) {
        const deg = (v / 100) * 360;
        progressCircle.style.background = `conic-gradient(#3f7bff 0deg ${deg}deg, rgba(223, 234, 245, 1) ${deg}deg 360deg)`;
    }

    toggles[0].addEventListener('click', () => {
        toggles[0].classList.toggle('on');

        if (toggles[0].classList.contains('on')) {
            toggleCircle[0].style.translate = '100%'
            progressCircle.style.animation = `spin ${rotationSpeed}s infinite linear`;
        } else {
            toggleCircle[0].style.translate = ''
            progressCircle.style.animation = 'none';
        }
    });
    toggles[1].addEventListener('click', () => {
        toggles[1].classList.toggle('on');
        if (toggles[1].classList.contains('on')) {
            toggleCircle[1].style.translate = '100%'
        }
        else {
            toggleCircle[1].style.translate = ''
        }
        progressCircle.style.display = toggles[1].classList.contains('on') ? 'none' : 'flex';
    });

    valueInput.addEventListener('input', () => setValue(valueInput.value));

    setValue(valueInput.value);

    if (isAnimated) {
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        });

        toggles[0].dispatchEvent(clickEvent)
    }
}

progressComponentApi(
    50,
    10,
    true
)