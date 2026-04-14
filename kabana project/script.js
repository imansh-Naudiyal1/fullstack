const todoList = document.querySelector("#todo .task-list");
const doingList = document.querySelector("#doing .task-list");
const doneList = document.querySelector("#done .task-list");
const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector("#todo .add-btn");

const board = JSON.parse(localStorage.getItem("board")) || {
    todo: [],
    doing: [],
    done: []
};

let draggedTask = null;

//  Add Task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text !== "") {
        const newTask = {
            id: Date.now(),
            text: text
        };

        board.todo.push(newTask);
        taskInput.value = "";
        saveBoard();
        renderBoard();
    }
});

//  Render Board
function renderBoard() {
    Object.keys(board).forEach(key => {
        const list = document.querySelector(`#${key} .task-list`);
        list.innerHTML = "";

        if (board[key].length === 0) {
            list.innerHTML = "<p class='empty'>No tasks</p>";
            return;
        }

        board[key].forEach(task => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.setAttribute("draggable", true);
            div.innerText = task.text;

            //  Drag Start
            div.addEventListener("dragstart", () => {
                draggedTask = { id: task.id, from: key };
            });

            //  Delete Button
            const delBtn = document.createElement("button");
            delBtn.innerText = "X";
            delBtn.classList.add("delete-btn");

            delBtn.addEventListener("click", () => {
                board[key] = board[key].filter(t => t.id !== task.id);
                saveBoard();
                renderBoard();
            });

            div.appendChild(delBtn);
            list.appendChild(div);
        });
    });
}

//  Drag & Drop 
["todo", "doing", "done"].forEach(key => {
    const list = document.querySelector(`#${key} .task-list`);

    list.addEventListener("dragover", (e) => e.preventDefault());

    list.addEventListener("drop", () => {
        if (draggedTask && draggedTask.from !== key) {
            const idx = board[draggedTask.from].findIndex(
                t => t.id === draggedTask.id
            );

            const [task] = board[draggedTask.from].splice(idx, 1);
            board[key].push(task);

            draggedTask = null;
            saveBoard();
            renderBoard();
        }
    });
});

function saveBoard() {
    localStorage.setItem("board", JSON.stringify(board));
}

renderBoard();