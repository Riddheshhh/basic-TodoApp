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
        renderTasks(newTask);  
        TodoInput.value = "" // clears the input once the button has clicked.
        console.log(tasks)
    })


    // creating a function to store the array in the local storage of the browser. It will be helpful whenever an user adds a new task in the list.
    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks))
        
        
        // note - localstorage can only store a string value, no other. Also, LocalStorage rewrites the entire storage again and again when the function is called and the tasks are need to be stored.
    }


    // function to pick up the tasks from the localstorage and rendering it on the page.
    function renderTasks(task){ // here we are taking a task as an arguement to further convert it into a list item.
        // you have to make a list for rendering the tasks.
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)

        if(task.completed) li.classList.add('completed')

        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `
        // we have to add an EL to the list to mark it completed or not.
        li.addEventListener('click', (e)=>{
            if(e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle('completed')
            console.log(task)
            saveTasks();
        })

        // now eventlistener for the delete button
        li.querySelector('button').addEventListener('click', (e)=>{
            e.stopPropagation() // prevents toggle from firing, (event bubbling)

            tasks = tasks.filter(t => t.id !== task.id)
            li.remove();
            saveTasks();
        })


        TodoList.appendChild(li);
    }

})
