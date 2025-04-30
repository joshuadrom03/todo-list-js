//create an array to store the task objects in

//store defualt tasks in there
const tasksArr = [
    {
        id: 1,
        text: "Wake up at 4 am!",
        status: "not complete"
    },
    {
        id: 2,
        text: "Go to the gym",
        status: "in Progress"
    }
]

//create add task function

function addTask(){
    const task = {

    }
}

const task_container = document.createElement("div");
task_container.className = "task-container"
const notepad_container = document.querySelector(".notepad")

function displayTasks() {
    tasksArr.forEach(task => {
        let task_id_div = document.createElement("div")
        let task_text_div = document.createElement("div")
        let task_status_div = document.createElement("div")
        let task_div = document.createElement("div")
        task_div.className = "task-div";

        //add the delete task button and functionality
        const delete_task = document.createElement("button");

        
        //append each object value to a div
        task_id_div.textContent =  task.id;
        task_text_div.textContent = task.text;
        task_status_div.textContent = task.status;
       

        task_div.append(task_id_div);
        task_div.append(task_text_div);
        task_div.append(task_status_div);
        task_div.append(delete_task);

        task_container.append(task_div);
    });
    notepad_container.append(task_container);
}

displayTasks();