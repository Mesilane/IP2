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


