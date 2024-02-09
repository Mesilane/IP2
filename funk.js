var di

let apps = document.querySelectorAll('.apps')
for (let i of apps){
    i.addEventListener('click', function(e) {
        document.querySelector('#mainMenu').style.display = 'none'
        document.querySelector('.arrow').style.display = 'inline'
        document.querySelector('.drag p').style.margin = '0 0 0 32px'
        document.querySelector(`.${this.id}`).style.display = 'inline'
        di = this.id
    })
}

document.querySelector('.arrow').addEventListener('click', function(e) {
    document.querySelector('.arrow').style.display = 'none'
    document.querySelector(`.${di}`).style.display = 'none'
    document.querySelector('#mainMenu').style.display = 'inline'
    document.querySelector('.drag p').style.margin = '0 0 0 -3px'
})


let modes = document.querySelectorAll('.one nav:first-of-type div')
for (i of modes){
    i.addEventListener('click', function(e){
        let a = document.querySelector('.one nav:first-of-type div.active')
        a.classList.remove('active')
        a.classList.add('nav')
        this.classList.remove('nav')
        this.classList.add('active')
        var mode = this.text
        console.log(mode)
    })
}

let notes = document.querySelectorAll('.one nav:last-of-type div')
for (i of notes){
    i.addEventListener('click', function(e){
        let a = document.querySelector('.one nav:last-of-type div.active')
        a.classList.remove('active')
        a.classList.add('nav')
        this.classList.remove('nav')
        this.classList.add('active')
        var note = this.text
        console.log(note)
    })
}



