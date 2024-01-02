
let apps = document.querySelectorAll('.apps')
for (let i of apps){
    i.addEventListener('click', function(e) {
        document.querySelector('#mainMenu').style.display = 'none'
        document.querySelectorAll(`#${this.id}`)[1].style.display = 'inline'
    })
}

