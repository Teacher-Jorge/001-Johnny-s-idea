let btnPlay = document.getElementById('btnPlay')
let btnRepeat = document.getElementById('btnRepeat')

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('narration3')
    audio.play()

    btnPlay.style.color = 'lime'
    btnPause.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})

let btnPause = document.getElementById('btnPause')

btnPause.addEventListener('click', function() {
    let audio = document.getElementById('narration3')
    audio.pause()

    btnPlay.style.color = 'purple'
    btnPause.style.color = 'lime'
    btnRepeat.style.color = 'purple'
})

btnRepeat.addEventListener('click', function() {
   let audio = document.getElementById('narration3')
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

let btnRightAway = document.getElementById('btnRightAway')

btnRightAway.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnRightAway').innerHTML = 'imediatamente'
        document.getElementById('btnRightAway').setAttribute("style", "box-shadow: 0 0 0")
        btnRightAway.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnRightAway').innerHTML = 'right away'
            document.getElementById('btnRightAway').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnRightAway.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnCouldPick = document.getElementById('btnCouldPick')

btnCouldPick.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnCouldPick').innerHTML = 'pôde colher algumas verduras'
        document.getElementById('btnCouldPick').setAttribute("style", "box-shadow: 0 0 0")
        btnCouldPick.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnCouldPick').innerHTML = 'could pick some greens'
            document.getElementById('btnCouldPick').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnCouldPick.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnBrought = document.getElementById('btnBrought')

btnBrought.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnBrought').innerHTML = 'trouxe um pouco de repolho e espinafre'
        document.getElementById('btnBrought').setAttribute("style", "box-shadow: 0 0 0")
        btnBrought.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnBrought').innerHTML = 'brought some cabbage and spinach'
            document.getElementById('btnBrought').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnBrought.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnCollected = document.getElementById('btnCollected')

btnCollected.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnCollected').innerHTML = 'eu colhi'
        document.getElementById('btnCollected').setAttribute("style", "box-shadow: 0 0 0")
        btnCollected.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnCollected').innerHTML = "I've collected"
            document.getElementById('btnCollected').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnCollected.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnProud = document.getElementById('btnProud')

btnProud.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnProud').innerHTML = 'orgulhosa dele'
        document.getElementById('btnProud').setAttribute("style", "box-shadow: 0 0 0")
        btnProud.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnProud').innerHTML = 'proud of him'
            document.getElementById('btnProud').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnProud.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnSuch = document.getElementById('btnSuch')

btnSuch.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnSuch').innerHTML = 'um menino tão bom'
        document.getElementById('btnSuch').setAttribute("style", "box-shadow: 0 0 0")
        btnSuch.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnSuch').innerHTML = 'such a good boy'
            document.getElementById('btnSuch').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnSuch.style.backgroundColor = 'white'
        }, 2000)
    }
)



btnHowever.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnHowever').innerHTML = 'No entanto'
        document.getElementById('btnHowever').setAttribute("style", "box-shadow: 0 0 0")
        btnHowever.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnHowever').innerHTML = "However"
            document.getElementById('btnHowever').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnHowever.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnStill = document.getElementById('btnStill')

btnStill.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnStill').innerHTML = 'ainda'
        document.getElementById('btnStill').setAttribute("style", "box-shadow: 0 0 0")
        btnStill.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnStill').innerHTML = "still"
            document.getElementById('btnStill').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnStill.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnStuff = document.getElementById('btnStuff')

btnStuff.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnStuff').innerHTML = 'pra comprar outras coisas'
        document.getElementById('btnStuff').setAttribute("style", "box-shadow: 0 0 0")
        btnStuff.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnStuff').innerHTML = "to buy other stuff"
            document.getElementById('btnStuff').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnStuff.style.backgroundColor = 'white'
        }, 2000)
    }
)

let btnOhNo = document.getElementById('btnOhNo')

btnOhNo.addEventListener('click', function() {
    let audio = document.getElementById('ohNo')
    audio.play()
    
        document.getElementById('btnOhNo').innerHTML = 'Oh,no!'
        document.getElementById('btnOhNo').setAttribute("style", "box-shadow: 0 0 0")
        btnOhNo.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnOhNo').innerHTML = "Oh, no!"
            document.getElementById('btnOhNo').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnOhNo.style.backgroundColor = 'white'
        }, 7000)
    }
)


