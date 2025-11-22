Компонент прогресса
const component = new ProgressComponent(container,options)
container - место, куда будет помещён компонент
options - {
    initialValue:string | number,
    isAnimated:boolean,
    isHiden:boolean
}
.hide() - скрыть
.show() - показать
.run() - начать анимацию
.stop() - остановить анимацию
.setValue() - установить значение прогресса