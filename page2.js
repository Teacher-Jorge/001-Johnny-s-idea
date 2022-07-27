let btnPlay = document.getElementById('btnPlay')
let btnRepeat = document.getElementById('btnRepeat')

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('narration2')
    audio.play()

    btnPlay.style.color = 'lime'
    btnPause.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})

let btnPause = document.getElementById('btnPause')

btnPause.addEventListener('click', function() {
    let audio = document.getElementById('narration2')
    audio.pause()

    btnPlay.style.color = 'purple'
    btnPause.style.color = 'lime'
    btnRepeat.style.color = 'purple'
})

btnRepeat.addEventListener('click', function() {
   let audio = document.getElementById('narration2')
   if (audio.paused) {
    audio.currentTime = 0
    audio.play()
   }else {
    audio.currentTime = 0
   }
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})

let btnOwn = document.getElementById('btnOwn')

btnOwn.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnOwn').innerHTML = 'suas próprias'
        document.getElementById('btnOwn').setAttribute("style", "box-shadow: 0 0 0")
        btnOwn.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnOwn').innerHTML = 'his own'
            document.getElementById('btnOwn').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnOwn.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnWentInto = document.getElementById('btnWentInto')

btnWentInto.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnWentInto').innerHTML = 'entrou'
        document.getElementById('btnWentInto').setAttribute("style", "box-shadow: 0 0 0")
        btnWentInto.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnWentInto').innerHTML = 'went into'
            document.getElementById('btnWentInto').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnWentInto.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnBought = document.getElementById('btnBought')

btnBought.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnBought').innerHTML = 'comprou tudo'
        document.getElementById('btnBought').setAttribute("style", "box-shadow: 0 0 0")
        btnBought.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnBought').innerHTML = 'bought everything'
            document.getElementById('btnBought').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnBought.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnWentBack = document.getElementById('btnWentBack')

btnWentBack.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnWentBack').innerHTML = 'voltou pra casa'
        document.getElementById('btnWentBack').setAttribute("style", "box-shadow: 0 0 0")
        btnWentBack.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnWentBack').innerHTML = 'went back home'
            document.getElementById('btnWentBack').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnWentBack.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnPlanning = document.getElementById('btnPlanning')

btnPlanning.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnPlanning').innerHTML = 'os planos para fazer'
        document.getElementById('btnPlanning').setAttribute("style", "box-shadow: 0 0 0")
        btnPlanning.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnPlanning').innerHTML = 'planning on making'
            document.getElementById('btnPlanning').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnPlanning.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnToldMom = document.getElementById('btnToldMom')

btnToldMom.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnToldMom').innerHTML = 'contou a sua mãe'
        document.getElementById('btnToldMom').setAttribute("style", "box-shadow: 0 0 0")
        btnToldMom.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnToldMom').innerHTML = 'told his mom'
            document.getElementById('btnToldMom').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnToldMom.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnGoingToGrow = document.getElementById('btnGoingToGrow')

btnGoingToGrow.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnGoingToGrow').innerHTML = 'Eu vou cultivar'
        document.getElementById('btnGoingToGrow').setAttribute("style", "box-shadow: 0 0 0")
        btnGoingToGrow.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnGoingToGrow').innerHTML = "I'm going to grow"
            document.getElementById('btnGoingToGrow').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnGoingToGrow.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnReplied = document.getElementById('btnReplied')

btnReplied.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnReplied').innerHTML = 'ao que ela respondeu'
        document.getElementById('btnReplied').setAttribute("style", "box-shadow: 0 0 0")
        btnReplied.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnReplied').innerHTML = "to which she replied"
            document.getElementById('btnReplied').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnReplied.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnSweetheart = document.getElementById('btnSweetheart')

btnSweetheart.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnSweetheart').innerHTML = 'meu querido'
        document.getElementById('btnSweetheart').setAttribute("style", "box-shadow: 0 0 0")
        btnSweetheart.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnSweetheart').innerHTML = "my sweetheart"
            document.getElementById('btnSweetheart').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnSweetheart.style.backgroundColor = 'white'
        }, 2000)
    }
)


