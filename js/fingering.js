let arr = {
    '1': 'C',
    '2': '-',
    '3': '-',
    '4': '-',
    '5': '-'
}
for (let i of document.querySelectorAll('.selector')){
    i.addEventListener('click', function(e){
        arr[String(this.id)] = this.value
        window.api.sendNote(Object.values(arr))
        window.api.callNote((arg) =>{
            for(i of document.querySelectorAll('.active')){
                i.style.backgroundImage = 'none'
                i.classList.remove('active')
            }
            if (arg[0].length > 4){
                // for(i of document.querySelectorAll('col')){
                //     for(let b of i.childNodes){
                //         b.style.backgroundImage = 'none'
                //     }
                // }
                // for(i of document.querySelectorAll('active')){
                //     i.style.backgroundImage = 'none'
                // }
                console.log(arg)
                for(let i = 0; i < 6; i++){
                    a = document.querySelectorAll('.col')[i].querySelector(`.p${arg[0][i]}`)
                    console.log(a)
                    a.style.backgroundImage = `url(../icons/pos/${arg[0][i]}.png)`
                    a.classList.add('active')
            }
        }
        })
    })
}
