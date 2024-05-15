
let note = 'C'
let mode = 'Ionian'
let col = 0

for (let i of document.querySelectorAll('.notes p')){
    i.addEventListener('click', function(e){
    if (this != document.querySelector('.active')){
        if (document.querySelector('.activeNote') != undefined){
            let a = document.querySelector('.activeNote')
            a.classList.remove('activeNote')
            a.style.backgroundColor = '#040D12'
        }
        this.style.backgroundColor = ''
        this.classList.add('activeNote')
        note = this.innerHTML
        window.api.sendNote([note, mode])
        window.api.callNote((arg) =>{
            col = 0
            for (i of document.querySelectorAll('.pos')){
                i.innerHTML = arg[0][col]
                col++
            }
            col = 0
            for (i of document.querySelectorAll('.note')){
                i.innerHTML = arg[1][col]
                col++
            }
            col = 0
        })
    }else{
        e.preventDefault()
    }})
    i.addEventListener('mouseover', function(e){
        if (this != document.querySelector('.activeNote')){
        this.style.backgroundColor = '#031824'
    }})
    i.addEventListener('mousedown', function(e){
        this.style.backgroundColor = '#143131'
    })
    i.addEventListener('mouseleave', function(e){
        if (this != document.querySelector('.activeNote')){
        this.style.backgroundColor = '#040D12'
}})}

for (let i of document.querySelectorAll('.mode p')){
    i.addEventListener('click', function(e){
    if (this != document.querySelector('.active')){
        if (document.querySelector('.activeMode') != undefined){
            let a = document.querySelector('.activeMode')
            a.classList.remove('activeMode')
            a.style.backgroundColor = '#040D12'
        }
        this.style.backgroundColor = ''
        this.classList.add('activeMode')
        mode = this.innerHTML
        window.api.sendNote([note, mode])
        window.api.callNote((arg) =>{
            col = 0
            for (i of document.querySelectorAll('.pos')){
                i.innerHTML = arg[0][col]
                col++
            }
            col = 0
            for (i of document.querySelectorAll('.note')){
                i.innerHTML = arg[1][col]
                col++
            }
            col = 0
        })
    }else{
        e.preventDefault()
    }})
    i.addEventListener('mouseover', function(e){
        if (this != document.querySelector('.activeMode')){
        this.style.backgroundColor = '#031824'
    }})
    i.addEventListener('mousedown', function(e){
        this.style.backgroundColor = '#143131'
    })
    i.addEventListener('mouseleave', function(e){
        if (this != document.querySelector('.activeMode')){
        this.style.backgroundColor = '#040D12'
}})}