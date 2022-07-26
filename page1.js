let btnPlay = document.getElementById('btnPlay')
let btnRepeat = document.getElementById('btnRepeat')

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('narration1')
    audio.play()

    btnPlay.style.color = 'chartreuse'
    btnPause.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})

let btnPause = document.getElementById('btnPause')

btnPause.addEventListener('click', function() {
    let audio = document.getElementById('narration1')
    audio.pause()

    btnPlay.style.color = 'purple'
    btnPause.style.color = 'chartreuse'
    btnRepeat.style.color = 'purple'
})

btnRepeat.addEventListener('click', function() {
   let audio = document.getElementById('narration1')
   if (audio.paused) {
    audio.currentTime = 0
    audio.play()
   }else {
    audio.currentTime = 0
   }
    btnPlay.style.color = 'chartreuse'
    btnPause.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})

let btnHasBeen = document.getElementById('btnHasBeen')

btnHasBeen.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnHasBeen').innerHTML = 'sempre foi'
        document.getElementById('btnHasBeen').setAttribute("style", "box-shadow: 0 0 0")
        btnHasBeen.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnHasBeen').innerHTML = "has always been"
            document.getElementById('btnHasBeen').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnHasBeen.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnTrouble = document.getElementById('btnTrouble')

btnTrouble.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnTrouble').innerHTML = 'se mete em encrenca'
        document.getElementById('btnTrouble').setAttribute("style", "box-shadow: 0 0 0")
        btnTrouble.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnTrouble').innerHTML = "gets into trouble"
            document.getElementById('btnTrouble').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnTrouble.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnAsked = document.getElementById('btnAsked')

btnAsked.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnAsked').innerHTML = 'pediu que ele fosse'
        document.getElementById('btnAsked').setAttribute("style", "box-shadow: 0 0 0")
        btnAsked.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnAsked').innerHTML = "asked him to go"
            document.getElementById('btnAsked').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnAsked.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnWay = document.getElementById('btnWay')

btnWay.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnWay').innerHTML = 'a caminho da'
        document.getElementById('btnWay').setAttribute("style", "box-shadow: 0 0 0")
        btnWay.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnWay').innerHTML = "On his way to the"
            document.getElementById('btnWay').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnWay.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnWhatIf = document.getElementById('btnWhatIf')

btnWhatIf.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnWhatIf').innerHTML = '"E se eu começasse a cultivar'
        document.getElementById('btnWhatIf').setAttribute("style", "box-shadow: 0 0 0")
        btnWhatIf.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnWhatIf').innerHTML = '"What if I started growing'
            document.getElementById('btnWhatIf').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnWhatIf.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnWouldntNeed = document.getElementById('btnWouldntNeed')

btnWouldntNeed.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnWouldntNeed').innerHTML = 'eu não precisaria'
        document.getElementById('btnWouldntNeed').setAttribute("style", "box-shadow: 0 0 0")
        btnWouldntNeed.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnWouldntNeed').innerHTML = "I wouldn't need"
            document.getElementById('btnWouldntNeed').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnWouldntNeed.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnUhuu = document.getElementById('btnUhuu')

btnUhuu.addEventListener('click', function() {
    let audio = document.getElementById('uhuuSound')
    audio.play()
    
        document.getElementById('btnUhuu').innerHTML = 'UHUU!!!'
        document.getElementById('btnUhuu').setAttribute("style", "box-shadow: 0 0 0")
        btnUhuu.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnUhuu').innerHTML = 'HEUREUX!!!'
            document.getElementById('btnUhuu').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnUhuu.style.backgroundColor = 'white'
        }, 2000)
    }
)







    
