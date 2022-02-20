const form = document.querySelector('#form');
const input = document.querySelector('#input')
const todos = document.querySelector('#todos')


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value;

    if(text){
        const todosEl = document.createElement('li')
        todosEl.innerHTML = text;
        todos.appendChild(todosEl);

        todosEl.addEventListener('click',()=>{
            todosEl.classList.toggle('completed');

            // setTimeout(() => {
            //     todosEl.style.display = 'none';
            // }, 10000);
        })

        input.value = '';

        update()
    }

  
})



function update(params) {
    const notes = document.querySelectorAll('li')

    const note = [];

    notes.forEach(notesEl=>{
        note.push({
            text : notesEl.innerText,
            completed : notesEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(note))
}