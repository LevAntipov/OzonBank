class ProgressComponent {
    constructor(container, options = {
        isAnimated:false,
        initialValue:15,
        isHiden:false
    }) {
        this._container = container
        this.isAnimated = options.isAnimated
        this.value = options.initialValue
        this.isHiden = options.isHiden

        this._render()
        this._addEvents()

        this.setValue(this.value)
    }

    setValue(v) {
        const deg = (v / 100) * 360;
        this._progressCircle.style.background = `conic-gradient(#3f7bff 0deg ${deg}deg, rgba(223, 234, 245, 1) ${deg}deg 360deg)`;
    }

    _toggleAnimateFunc() {
        if (this.isAnimated) {
            this._toggleAnimate.style.backgroundColor = 'rgb(63, 123, 255)'
            this._toggleCircleAnimate.style.translate = '100%'
            this._progressCircle.style.animation = `spin 3s infinite linear`
        } else {
            this._toggleCircleAnimate.style.translate = ''
            this._progressCircle.style.animation = 'none';
            this._toggleAnimate.style.backgroundColor = 'rgba(223, 234, 245, 1)'
        }
    }

    _toggleHideFunc() {
        if(this.isHiden){
            this._toggleCircleHide.style.translate = '100%'
            this._toggleHide.style.backgroundColor = 'rgb(63, 123, 255)'
            this._progressCircle.style.display = 'none'
        }
        else{
            this._toggleCircleHide.style.translate = ''
            this._toggleHide.style.backgroundColor = 'rgba(223, 234, 245, 1)'
            this._progressCircle.style.display = 'flex'
        }
    }

    _addEvents() {
        this._toggleAnimateFunc()

        this._toggleHideFunc()

        this._toggleAnimate.addEventListener('click', () => {
            this.isAnimated = !this.isAnimated
            this._toggleAnimateFunc()
        })

        this._toggleHide.addEventListener('click', () => {
            this.isHiden = !this.isHiden
            this._toggleHideFunc()
        });

        this._valueInput.addEventListener('input', () => this.setValue(this._valueInput.value));
    }

    _render() {
        const divApp = document.createElement('div')
        divApp.classList.add('app')
        this._container.appendChild(divApp)

        const divTitle = document.createElement('div')
        divTitle.classList.add('title')
        divTitle.innerHTML = 'Progress'
        divApp.appendChild(divTitle)

        //DIV progress 
        const divProgress = document.createElement('div')
        divProgress.classList.add('progress')
        divApp.appendChild(divProgress)

        const divProgressCircle = document.createElement('div')
        divProgressCircle.classList.add('progressCircle')
        divProgress.appendChild(divProgressCircle)

        const divCenterCircle = document.createElement('div')
        divCenterCircle.classList.add('centerCircle')
        divProgressCircle.appendChild(divCenterCircle)
        //DIV progress 


        //DIV controls
        const divControls = document.createElement('div')
        divControls.classList.add('controls')
        divApp.appendChild(divControls)

        //....DIV valueControl
        const divValueControl = document.createElement('div')
        divValueControl.classList.add('valueControl')
        divControls.appendChild(divValueControl)

        const divBuffer = document.createElement('div')
        divBuffer.classList.add('buffer')
        divValueControl.appendChild(divBuffer)

        const inputProgressInput = document.createElement('input')
        inputProgressInput.classList.add('progressInput')
        inputProgressInput.value = this.value
        divBuffer.appendChild(inputProgressInput)


        const spanValue = document.createElement('span')
        spanValue.innerHTML = 'Value'
        divValueControl.appendChild(spanValue)
        //....DIV valueControl

        //....DIV animateToggle
        const divAnimateToggle = document.createElement('div')
        divAnimateToggle.classList.add('animateToggle')
        divControls.appendChild(divAnimateToggle)

        const divBuffer2 = document.createElement('div')
        divBuffer2.classList.add('buffer')
        divAnimateToggle.appendChild(divBuffer2)

        const divToggle1 = document.createElement('div')
        divToggle1.classList.add('toggle')
        divBuffer2.appendChild(divToggle1)

        const divToggleCircle = document.createElement('div')
        divToggleCircle.classList.add('toggleCircle')
        divToggle1.appendChild(divToggleCircle)


        const spanValue2 = document.createElement('span')
        spanValue2.innerHTML = 'Animate'
        divAnimateToggle.appendChild(spanValue2)
        //....DIV animateToggle

        //....DIV hideToggle
        const divHideToggle = document.createElement('div')
        divHideToggle.classList.add('hideToggle')
        divControls.appendChild(divHideToggle)

        const divBuffer3 = document.createElement('div')
        divBuffer3.classList.add('buffer')
        divHideToggle.appendChild(divBuffer3)

        const divToggle2 = document.createElement('div')
        divToggle2.classList.add('toggle')
        divBuffer3.appendChild(divToggle2)

        const divToggleCircle2 = document.createElement('div')
        divToggleCircle2.classList.add('toggleCircle')
        divToggle2.appendChild(divToggleCircle2)


        const spanValue3 = document.createElement('span')
        spanValue3.innerHTML = 'Hide'
        divHideToggle.appendChild(spanValue3)
        //....DIV hideToggle

        this._toggleAnimate = divToggle1
        this._toggleCircleAnimate = divToggleCircle

        this._toggleHide = divToggle2
        this._toggleCircleHide = divToggleCircle2

        this._progressCircle = divProgressCircle

        this._valueInput = inputProgressInput
    }

    hide(){
        this.isHiden = true
        this._toggleHideFunc()
    }
    show(){
        this.isHiden = false
        this._toggleHideFunc()
    }
    run(){
        this.isAnimated = true
        this._toggleAnimateFunc()
    }
    stop(){
        this.isAnimated = false
        this._toggleAnimateFunc()
    }
}

let progr = new ProgressComponent(document.body, { initialValue: 30, isAnimated: false, isHiden: false })