//create the todays task function that displays the tasks for the day
const tasks = [
    {
        check: null,
        text: "Go to the gym",
        date: new Date(),
        category: "Personal",
        description: "Lose the belly fat "
    },
    {
        check: null,
        text: "Finsh project by deadline",
        date: new Date(),
        category: "Work",
        description: " finish meeting and do data analysis"
    },
]

const categories = [
    "Personal", "Work", "Family"
]


export function displayTodaysTasks() {
    
    const main_div = document.querySelector(".middle-panel")
    main_div.innerHTML = "";

    const content_div = document.createElement("div");
    const taskcount = tasks.length;
    

    const todayHeading = document.createElement("h1")
    todayHeading.textContent = "Todays tasks: " + taskcount;
    todayHeading.style.fontSize = "50px";


    const addTask = document.createElement("button")
    const addImg = document.createElement("img");
    addImg.src = "../assets/plus.svg";
    addTask.className = "add-taskbtn";
    addTask.append(addImg);
    addTask.textContent = "Add New Task";

   content_div.append(todayHeading,addTask);
   

    tasks.forEach((task, index) => {
        
        const tasks_div = document.createElement("div");
        tasks_div.className = "task"
       
        const taskCheck = document.createElement("div");
        const taskCheckContent = document.createElement("input");
        taskCheckContent.type = "checkbox";
        taskCheckContent.className = "task-check";
        
        taskCheck.append(taskCheckContent);

        const taskText = document.createElement("div");
        taskText.className = "task-columb";
        const taskTextContent = document.createElement("p");
        taskTextContent.textContent = task.text;
        taskText.append(taskTextContent);

        const taskCategory = document.createElement("div")
        taskCategory.className = "category-columb";
        
        const taskCategoryContent = document.createElement("p");
        taskCategoryContent.textContent = task.category;
        taskCategory.append(taskCategoryContent);

        const detailsImg = document.createElement("img")
        detailsImg.src = "../assets/arrow.svg";
        detailsImg.style.width = "10px";
        detailsImg.style.height = "3px";
        
        const detailsbtn = document.createElement("button");
        
        detailsbtn.className = "detailsbtn";
        detailsbtn.appendChild(detailsImg);

        detailsbtn.addEventListener("click", function(e){
            displayDetails();
        })

        tasks_div.append(taskCheck,taskText,taskCategory,detailsbtn);

        content_div.append(tasks_div);
        
    });
    
    main_div.append(content_div)
}

function displayDetails(){

    const task = [ ];

    const detailsDiv = document.querySelector(".details-panel");
    detailsDiv.innerHTML = " ";
    const formDiv = document.createElement("form");
    formDiv.className = "details-form";

    const taskTextLabel = document.createElement("h1")
    taskTextLabel.textContent = "Task:";
   
    const taskTextInput = document.createElement("input");
    taskTextInput.name = "task-text";
    taskTextInput.className = "task-input";
    taskTextInput.id = "task-text-input"
    taskTextInput.placeholder = "Enter your task...";

    const taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.placeholder = " Description";
    taskDescriptionInput.id = "task-description-input";
    taskDescriptionInput.className = "task-input";

    const taskCategoryInput = document.createElement("select");
    taskCategoryInput.id = "task-category-input"
    taskCategoryInput.className = "task-input"

    formDiv.append(taskTextLabel,taskTextInput,taskDescriptionInput);

    detailsDiv.append(formDiv)

}

