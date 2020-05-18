let clock = document.querySelector('.clock')
const codeTimeBtn = document.querySelector('.code')
const codeBreakBtn = document.querySelector('.break')
const codeCoffeBtn = document.querySelector('.coffe')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
let minutos = 0;
let startInClock;

formatTimer = (seconds) => {
    const data = new Date(seconds * 1000); // Convertendo milissegundos para segundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });  
}



startClock = (valor) => {
    startInClock = setInterval(function(){
        if(valor === 0) {
            clock.classList.add('end') 
            clockEffect()
            clearInterval(startInClock)
            return    
        }
        valor--
        minutos = valor;
       clock.innerHTML = formatTimer(valor)
       clock.classList.remove('end')
    },1000)
}

clockEffect = () => {
    var audio = document.querySelector('#clock-effect')
    audio.play()
}




startBtn.addEventListener('click',function(){
    clearInterval(startInClock)
    startClock(minutos) 
    pauseBtn.classList.remove('active-Action')
    startBtn.classList.add('active-Action')
});

pauseBtn.addEventListener('click', function(){
    clearInterval(startInClock)
    startBtn.classList.remove('active-Action')
    pauseBtn.classList.add('active-Action')
});

codeTimeBtn.addEventListener('click', function(){
    minutos = 0
    clock.innerHTML = formatTimer(1500)
    minutos = 1500
    clock.classList.remove('end') 

});

codeBreakBtn.addEventListener('click', function(){
    minutos = 0
    clock.innerHTML = formatTimer(300)
    minutos = 300
    clock.classList.remove('end') 
})

codeCoffeBtn.addEventListener('click', function(){
    clock.classList.remove('end') 
    minutos = 0
    clock.innerHTML = formatTimer(900)
    minutos = 900
})