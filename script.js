// document.addEventListener('DOMContentLoaded', ()=> {
//     const todoInput = document.getElementById("todo-input");
//     const addTaskBtn = document.getElementById("add-task-btn");
//     const todoList = document.getElementById("todo-list");

//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [] ;
//     renderTasks();
    
//     addTaskBtn.addEventListener('click', () => {
//         const tasktext = todoInput.value.trim();
//         if(tasktext === "") return;

//         if(tasktext){
//             tasks.push(tasktext);
//             // tasks.push({text: tasktext, completed: false});
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//             renderTasks();
//             todoInput.value = '';
//         }
//     });


//     function renderTasks(){
//         todoList.innerHTML = '';
//         tasks.forEach(task => {
//             const li = document.createElement("li")
//             li.textContent = task;

//             const delBtn = document.createElement('button')
//             delBtn.textContent = '❌'
//             delBtn.addEventListener('click', () =>{
//                 li.remove();
//                 tasks = tasks.filter(item => item !== task)
//                 localStorage.setItem('tasks', JSON.stringify(tasks));
//             })
//             li.appendChild(delBtn);
//             todoList.appendChild(li);
//         });
//     };

// })


document.addEventListener('DOMContentLoaded', ()=> {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = [];
    console.log('initial task: ', tasks)
    try{
        storedTasks = localStorage.getItem('tasks');
        tasks = storedTasks ? JSON.parse(storedTasks):[];
        if(!Array.isArray(tasks)){
            tasks = []
        }
    }
    catch (error){
        console.log('error loading tasks: ', error);
    }



    renderTasks();
    
    addTaskBtn.addEventListener('click', () => {
        const tasktext = todoInput.value.trim();
        if(tasktext === "") return;

        if(tasktext){
            tasks.push(tasktext);
            // Changed 'tasks' to tasks - this was the main issue
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            todoInput.value = '';
        }
    });

    function renderTasks(){
        todoList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;

            const delBtn = document.createElement('button');
            delBtn.textContent = '❌';
            delBtn.addEventListener('click', () =>{
                li.remove();
                tasks = tasks.filter(item => item !== task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });
            li.appendChild(delBtn);
            todoList.appendChild(li);
        });
    }
});