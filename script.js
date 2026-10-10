
function todo(){
    let todo = document.getElementById('result').value
    let li = document.createElement('li')
    li.innerHTML=`
    <div class="flex gap-5 items-center mt-3">
        <img src="https://static.vecteezy.com/system/resources/previews/006/059/254/non_2x/black-check-mark-icon-tick-symbol-in-black-color-illustration-for-web-mobile-and-concept-design-free-vector.jpg" class="w-4 h-4">
        ${todo}
        <button onclick="editTodo(this)" class="h-10 w-9 bg-white rounded-md shadow-xl"><ion-icon name="create-outline"></ion-icon></button>
        <button onclick="deleteTask(this)" class="h-10 w-9 bg-white rounded-md shadow-xl"><ion-icon name="trash-outline"></ion-icon></button>
    </div>
     `
    l.appendChild(li)
}

function editTodo(da){
    let li = da.parentNode
    let oldText = li.childNodes[2].textContent
    console.log(li.childNodes[2].textContent.trim());
    let newtext = prompt('edit',oldText)
    li.childNodes[2].textContent=newtext;
}
function deleteTask(d){
    d.parentNode.remove()
}