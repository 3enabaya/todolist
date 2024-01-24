let add = document.getElementById('add')
let input = document.getElementById('input')
let task = document.getElementById('task')
let clear = document.getElementById('clear')
let check = document.getElementById('check')
let uncheck = document.getElementById('uncheck')
//array for values

let array = []

//loading tasks  
if (localStorage.getItem('TODOLIST')){
    array= JSON.parse(localStorage.getItem('TODOLIST'))
}
window.onload = function () {
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
uncheck.appendChild(div)
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
         check.appendChild(div)
         done.checked='true'
  }
        }
    }

// remove
    butto.addEventListener('click', function () {
      let array1=  array.filter(obj => obj.id !== div.id);
        console.log(array1)
        array = array1
        console.log(array)
        div.remove()
    localStorage.setItem('TODOLIST',JSON.stringify(array))
    })
    clear.onclick = function () {
        localStorage.clear()
        check.innerHTML =' '
        uncheck.innerHTML = ' '
        array = []
    }
    
// done task
    done.addEventListener('click', function (e) {
        div.setAttribute('done', 'yes')
        div.classList.toggle('active')
        done.checked.toggle='true'
        for (let i =0; i<array.length; i++){
        if(div.id === array[i].id){
    if(div.classList.contains('active')){
        array[i].value = 'yes'  
        check.appendChild(div)
    }
    else {
        array[i].value = 'no'  
        uncheck.appendChild(div)

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
    uncheck.appendChild(div)
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
    // find
    butto.addEventListener('click', function () {
console.log(div.id)   
        let array1=  array.filter(obj => obj.id !== div.id);
        console.log(array1)
        array = array1
        div.remove()
        localStorage.setItem('TODOLIST',JSON.stringify(array))
    })
    //end storing in array

   //clear button
   clear.onclick = function () {
    localStorage.clear()
       check.innerHTML = ' '
       uncheck.innerHTML = ' '
       array = []
}

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
        array[i].value = 'yes'
        check.appendChild(div)
    }
    else {
        console.log('doesnhgfdst')  
        array[i].value = 'no'
        uncheck.appendChild(div)
 }
    }
    }
    console.log(array)
    localStorage.setItem('TODOLIST', JSON.stringify(array))
    
})}
//     dragdiv(task)
//  function dragdiv(ele) {
//      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//      ele.onmousedown = positions
//      function positions(e) {
//          pos3 = e.clientY;
//          pos4 = e.clientX;
//          document.onmouseup = stopmoving
//          document.onmousemove = startmoving
//      }
//      function startmoving(e) {
//          pos1 = pos3 - e.clientY
//          pos2 = pos4 - e.clientX
//          pos3 = e.clientY;
//          pos4 = e.clientX;
//          ele.style.top = (ele.offsetTop - pos1) + "px"
//          ele.style.left = (ele.offsetLeft - pos2) +"px"
//   }
//      function stopmoving() {
//          document.onmousemove = null
//          document.onmouseup = null
//      } 

// }


