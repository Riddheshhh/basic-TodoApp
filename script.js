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


// document.addEventListener('DOMContentLoaded', ()=> {
//     const todoInput = document.getElementById("todo-input");
//     const addTaskBtn = document.getElementById("add-task-btn");
//     const todoList = document.getElementById("todo-list");

//     let tasks = [];
//     console.log('initial task: ', tasks)
//     try{
//         storedTasks = localStorage.getItem('tasks');
//         tasks = storedTasks ? JSON.parse(storedTasks):[];
//         if(!Array.isArray(tasks)){
//             tasks = []
//         }
//     }
//     catch (error){
//         console.log('error loading tasks: ', error);
//     }



//     renderTasks();
    
//     addTaskBtn.addEventListener('click', () => {
//         const tasktext = todoInput.value.trim();
//         if(tasktext === "") return;

//         if(tasktext){
//             tasks.push(tasktext);
//             // Changed 'tasks' to tasks - this was the main issue
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//             renderTasks();
//             todoInput.value = '';
//         }
//     });

//     function renderTasks(){
//         todoList.innerHTML = '';
//         tasks.forEach(task => {
//             const li = document.createElement("li");
//             li.textContent = task;

//             const delBtn = document.createElement('button');
//             delBtn.textContent = '❌';
//             delBtn.addEventListener('click', () =>{
//                 li.remove();
//                 tasks = tasks.filter(item => item !== task);
//                 localStorage.setItem('tasks', JSON.stringify(tasks));
//             });
//             li.appendChild(delBtn);
//             todoList.appendChild(li);
//         });
//     }
// });





document.addEventListener('DOMContentLoaded', ()=>{
    const TodoInput = document.getElementById('todo-input')
    const AddBtn = document.getElementById('add-task-btn')
    const TodoList = document.getElementById('todo-list')

    // well you gotta store the tasks. For that, an array would be useful.

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // for the rendering of the tasks if any when the browser is loaded the very first time.
    tasks.forEach(task => renderTasks(task))

    // let's just start with how we can add task by clicking on the addbtn.
    AddBtn.addEventListener('click', ()=>{
        const taskText = TodoInput.value.trim()
        if(taskText === "") return; // if there's no input, the function ends here.

        // for a given task, we need to give it some additional properties for the functionalities to provide.
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }

        // now we can push this newTask in the array.
        tasks.push(newTask);
        saveTasks();  
        TodoInput.value = "" // clears the input once the button has clicked.
        console.log(tasks)
    })


    // creating a function to store the array in the local storage of the browser. It will be helpful whenever an user adds a new task in the list.
    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks))
        
        
        // note - localstorage can only store a string value, no other. Also, LocalStorage rewrites the entire storage again and again when the function is called and the tasks are need to be stored.
    }


    // function to pick up the tasks from the localstorage and rendering it on the page.
    function renderTasks(task){
        console.log(task)
    }

})
