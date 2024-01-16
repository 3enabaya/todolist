let add = document.getElementById('add')
let input = document.getElementById('input')
let task= document.getElementById('task')
//array for values
let array = []
//loading tasks  
if (localStorage.getItem('TODOLIST')){
    array= JSON.parse(localStorage.getItem('TODOLIST'))
}
window.onload= function(){
for(let i =0; i<array.length; i++){
    //getting tasks again
    let div = document.createElement('div')
let div1 = document.createElement('div')
div.setAttribute('class', `div`)
let text = document.createTextNode(array[i].input)
let done = document.createElement('input')
done.setAttribute('type', 'checkbox')
    div.appendChild(done)

div.appendChild(text)
    task.appendChild(div)
    div1.appendChild(done)
    div1.appendChild(text)
div.appendChild(div1)
div.setAttribute('id',array[i].id)
div.setAttribute('done','no')
let butto = document.createElement('button')
let remove = document.createTextNode('X')
butto.appendChild(remove)
div.appendChild(butto)
butto.setAttribute('id', 'remove')
butto.setAttribute('class', 'remove')
//end storing in array
    //first condition 
    for (let i = 0; i < array.length; i++){
    
    if (array[i].value=='yes'){
     if(div.id === array[i].id){
      div.classList.add('active')
      done.checked='true'
  }
        }
}

butto.addEventListener('click',function(){
    array.pop(text)
    div.remove()
    localStorage.setItem('TODOLIST',JSON.stringify(array))
})
// done task
    done.addEventListener('click', function (e) {
        div.setAttribute('done', 'yes')
        div.classList.toggle('active')
              done.checked.toggle='true'
        for (let i =0; i<array.length; i++){
        if(div.id === array[i].id){
    if(div.classList.contains('active')){
        array[i].value='yes'  
    }
    else {
        array[i].value = 'no'  
        //colors
}
    }
    }
    localStorage.setItem('TODOLIST',JSON.stringify(array))
    })
        // end done task




}


}



//crating tasks 
add.onclick = function () {
    //div 
    if (!input.value) {
        return
    }
    JSON.parse(localStorage.getItem('TODOLIST'))
    let div = document.createElement('div')
    let div1 = document.createElement('div')
    div.setAttribute('class', `div`)
    div.setAttribute('done', 'no')
    let done = document.createElement('input')
    done.setAttribute('type', 'checkbox')
    div.appendChild(done)
    let text = document.createTextNode(`${input.value}`)
    div.appendChild(text)
    div.setAttribute('id', Date.now())
    task.appendChild(div)
    div1.appendChild(done)
    div1.appendChild(text)
    div.appendChild(div1)
    let butto = document.createElement('button')
    let remove = document.createTextNode('X')
    butto.appendChild(remove)
    butto.setAttribute('id', 'remove')
    butto.setAttribute('class', 'remove')
    div.appendChild(butto)

    //end crating tasks 
    //storing in array
    array.push({ input: input.value, value: 'no', id: div.id })
    localStorage.setItem('TODOLIST', JSON.stringify(array))
    if (input.value !== '') {
        input.value = ''
    }
    butto.addEventListener('click',function(){
        array.pop(text)
        div.remove()
        localStorage.setItem('TODOLIST',JSON.stringify(array))
    })
    //end storing in array
  
    

// done task
done.addEventListener('click', function (e) {
    div.setAttribute('done', 'yes')
    div.classList.toggle('active')
    done.checked.toggle='true'
    console.log(div.id)
    console.log(array)
    for (let i =0; i<array.length; i++){
        if(div.id === array[i].id){
    if(div.classList.contains('active')){
        console.log('cotains')  
        array[i].value='yes'
    }
    else {
        console.log('doesnhgfdst')  
        array[i].value='no'
            }
    }
    }
    console.log(array)
    localStorage.setItem('TODOLIST',JSON.stringify(array))
    })}
        // end done task

