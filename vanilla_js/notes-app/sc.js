const addbtn = document.querySelector(".add");
const notes = JSON.parse(localStorage.getItem('notes'));


if(notes){
    notes.forEach(note=>{
        addNewNote(note)
    })
}


addbtn.addEventListener("mouseover", () => {
    addbtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Note`;
    addbtn.style.transition = 'all 2s'
    // console.log("Cobra Kai");
})

addbtn.addEventListener("mouseout", () => {
    addbtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    // console.log("Cobra Kai Never Dies");
})

addbtn.addEventListener("click", () => {
    addNewNote();
})

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('notes');

    note.innerHTML = ` <div class="note">
    <div class="bar-tool">
        <button class="edit
    "><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-circle-minus"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}">
        <p></p>
    </div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
 </div>`;

    document.body.appendChild(note);

    const noteEl = note.querySelector('.note');

    const edit = note.querySelector(".edit");
    const deleteBtn = note.querySelector('.delete')

    const main = noteEl.querySelector('.main');
    const textArea = noteEl.querySelector('textarea')

    textArea.value = text;
    main.innerHTML= marked(text);

    edit.addEventListener("click", () => {
        main.classList.toggle('hidden');
        console.log("Cobra Kai");
        textArea.classList.toggle('hidden');
    })

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS()
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        
        main.innerHTML = marked(value);
        updateLS();
    })
}


function updateLS(){
    const noteText = document.querySelectorAll('textarea')
    const notes = [];

    noteText.forEach(note=>{
        notes.push(note.value);
    })

    localStorage.setItem('notes',JSON.stringify(notes));
}





