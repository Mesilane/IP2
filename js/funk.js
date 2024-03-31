document.querySelector('.loadScreen').addEventListener('click', function(e){
    this.style.display = 'none'
    document.querySelector('.icons').style.display = 'flex'
})

const sendMessage = (what) => {
    window.api.sendMsg(what)
}


for (let i of document.querySelectorAll('.icon')){
    sendMessage(this.getAttribute('id'))
}





