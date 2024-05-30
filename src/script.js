// script.js
function generateFile() {
    // Pobierz dane do wygenerowania pliku
    let data = "To jest zawartość pliku generowanego przez JavaScript.";
    
    // Utwórz nowy obiekt Blob z danymi tekstowymi
    let blob = new Blob([data], { type: 'text/plain' });

    // Utwórz element a
    let link = document.createElement('a');

    // Ustaw atrybut href na lokalny URL bloba
    link.href = window.URL.createObjectURL(blob);

    // Ustaw atrybut download na nazwę pliku i lokalizację
    link.download = '../generated_file.txt';

    // Dodaj link do dokumentu
    document.body.appendChild(link);

    // Kliknij na link, aby pobierać plik
    link.click();

    // Usuń link z dokumentu
    document.body.removeChild(link);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const newTask = document.createElement('li');
    newTask.textContent = todoInput.value;
    todoList.appendChild(newTask);

    todoInput.value = '';
}
