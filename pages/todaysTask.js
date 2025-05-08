/*
    make the save chnages button update the task details
    make it so today displays todays tasks
    make it so upcoming displays upcoming tasks
    make the add category button functional
    display the tasks to the corresponding category
    create the calendar display page(Optional remove feature)
*/
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
    {
        check: null,
        text: "send money to mom",
        date: "06/07/2025",
        category: "Family",
        description: " pay mom back for the loan"
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
   
    addTask.className = "add-taskbtn";
    addTask.textContent = "Add New Task";

    addTask.addEventListener("click", function(e){
        displayDetails("", "", "", "")
    })

   content_div.append(todayHeading,addTask);
   

    tasks.forEach((task, tasksindex) => {
        
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
        
        const taskCategoryContent = document.createElement("p");
        taskCategoryContent.className = "category-columb"
        taskCategoryContent.textContent = "# " + task.category;
        taskText.append(taskTextContent, taskCategoryContent);
       
        const detailsbtn = document.createElement("button");
        
        detailsbtn.className = "detailsbtn";
        detailsbtn.addEventListener("click", function(e){
            displayDetails(tasksindex,task.text,task.description,task.category,task.date);
        })

        tasks_div.append(taskCheck,taskText,detailsbtn);

        content_div.append(tasks_div);
        
    });
    
    main_div.append(content_div)
}

export function displayUpcomingTasks(){
    const main_div = document.querySelector(".middle-panel")
    main_div.innerHTML = "";

    const content_div = document.createElement("div");

    const upcomingHeading = document.createElement("h1");
    upcomingHeading.textContent = "Upcoming";
    
    content_div.append(upcomingHeading);

    main_div.append(content_div);
}

function displayDetails(tasksindex,tasktext,taskdescription,taskcategory,taskdate){
    
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
    taskTextInput.value = tasktext;

    const taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.placeholder = " Description";
    taskDescriptionInput.id = "task-description-input";
    taskDescriptionInput.className = "task-input";
    taskDescriptionInput.value = taskdescription;

    const taskCategoryFieldset = document.createElement("fieldset")
    taskCategoryFieldset.className = "category-feild";

    const categoryLabel = document.createElement("label");
    categoryLabel.htmlFor = "task-category";
    categoryLabel.textContent = "Category: "

    const taskCategoryInput = document.createElement("select");
    taskCategoryInput.id = "task-category-input"
    taskCategoryInput.className = "task-input"
    taskCategoryInput.value = taskcategory;
    
    categories.forEach((option, index) =>{
        const options = document.createElement("option")
        options.value = `value${index + 1}`
        options.textContent = option;
        taskCategoryInput.append(options);
    })

    taskCategoryFieldset.append(categoryLabel,taskCategoryInput);

    const dateFieldset = document.createElement("fieldset");
    dateFieldset.className = "date-field";

    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "date";
    dateLabel.textContent = "Due Date: "

    const dateInput = document.createElement("input")
    dateInput.type = "text";
    dateInput.className = "date-input";
    dateInput.value = taskdate;

    dateFieldset.append(dateLabel,dateInput);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "details-tasks-btn"
    buttonsDiv.id = "delete-taskbtn";

    const deleteTaskbtn = document.createElement("button");
    deleteTaskbtn.textContent = "Delete Task"
    deleteTaskbtn.className = "delete-taskbtn"
    deleteTaskbtn.addEventListener("click" ,function(e) {
        e.preventDefault();
       deleteTask(tasksindex)
        
    })

    const saveChangesbtn = document.createElement("button")
    saveChangesbtn.textContent = "Save Changes";
    saveChangesbtn.className = "save-taskbtn"
    saveChangesbtn.addEventListener("click", function(e){
        e.preventDefault();
        saveChanges(tasksindex,tasktext,taskdescription,taskcategory,taskdate);
        detailsDiv.innerHTML = " ";
        displayTodaysTasks();
    })

    buttonsDiv.append(deleteTaskbtn,saveChangesbtn)

    formDiv.append(
        taskTextLabel,
        taskTextInput,
        taskDescriptionInput,
        taskCategoryFieldset,
        dateFieldset,
        buttonsDiv);

    detailsDiv.append(formDiv)

}

function deleteTask(tasksindex){
   tasks.splice(tasksindex, 1);
   displayTodaysTasks();
}

function saveChanges(index,text,description,category,date){
    /*
        create the logic to update the values of the task
    */
}

