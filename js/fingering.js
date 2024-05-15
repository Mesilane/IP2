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
            for (let i of arg){
                
            }
        })
    })
}
