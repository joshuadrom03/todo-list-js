/*
   
    get the text content of the options
*/
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

const allTasks = [
    {
        
        check: null,
        text: "Go to the gym",
        date: formattedDate,
        category: "Personal",
        description: "Lose the belly fat "
    },
    {
        
        check: null,
        text: "Finsh project by deadline",
        date: formattedDate,
        category: "Work",
        description: " finish meeting and do data analysis"
    },
    {
        
        check: null,
        text: "Send money to mom",
        date: "2026/04/05",
        category: "Family",
        description: " pay mom back for the loan"
    },
    
]



const categories = [
    "Personal", "Work", "Family"
]

const content_div = document.createElement("div")

export function displayCategories() {
    const navbar = document.querySelector(".navigation")
    const categorySec = document.querySelector(".category-div")
    categorySec.innerHTML = "";
    categories.forEach((category, index) => {
       const categoryDiv = document.createElement("div");
        categoryDiv.textContent = "# " + category;
        categoryDiv.className = "category"
        categoryDiv.addEventListener("click", function(e){
            /*
            add function to display tasks based on category
            */
            const tasks = allTasks.filter((task) => task.category == category)
            displayTasks(tasks);
        })
        categorySec.append(categoryDiv,addCategorybtn);
  })
  navbar.append(categorySec);
}
const addCategorybtn = document.createElement("button")
  addCategorybtn.textContent = "Add a category"
  addCategorybtn.className = "add-category-btn"

  addCategorybtn.addEventListener("click",() =>{
        addCategory();
  })   

export function displayTodaysTasks() {

    const tasks = allTasks.filter((task) => task.date == formattedDate);
    
    const main_div = document.querySelector(".middle-panel")
    main_div.innerHTML = "";
    content_div.innerHTML = "";

    const heading_div = document.createElement("div");
    
    const todayHeading = document.createElement("h1")
    todayHeading.textContent = "Todays tasks: ";
    todayHeading.style.fontSize = "50px";

    const addTask = document.createElement("button")
    addTask.className = "add-taskbtn";
    addTask.textContent = "Add New Task";
    
    addTask.addEventListener("click", function(e){
        
       addTaskForm(tasks);
    
    })
    
   heading_div.append(todayHeading,addTask);
    main_div.append(heading_div);
    displayTasks(tasks);
    
    
}

export function displayUpcomingTasks(){
    const tasks = allTasks.filter((task) => task.date != formattedDate);
    

    const main_div = document.querySelector(".middle-panel")
    main_div.innerHTML = "";
    content_div.innerHTML = "";

    const heading_div = document.createElement("div");

    const upcomingHeading = document.createElement("h1");
    upcomingHeading.textContent = "Upcoming Tasks: ";    

    const addTask = document.createElement("button")
    addTask.className = "add-taskbtn";
    addTask.textContent = "Add New Task";
    
    addTask.addEventListener("click", function(e){
       
        addTaskForm(tasks);
        
    })

    heading_div.append(upcomingHeading,addTask);
    main_div.append(heading_div);
    displayTasks(tasks);
}

function addTaskForm(tasks) {

    const detailsTaskDiv = document.querySelector(".details-panel")
    detailsTaskDiv.innerHTML = "";
    detailsTaskDiv.style.visibility = "visible";
   
    const addtaskDiv = document.createElement("form")
    addtaskDiv.className = "details-form";

    const addHeading = document.createElement("h1")
    addHeading.textContent = "Add a task:"

    const taskTextInput = document.createElement("input");
    taskTextInput.name = "task-text";
    taskTextInput.className = "task-input";
    taskTextInput.id = "task-text-input"
    taskTextInput.placeholder = "Enter your task...";

    const taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.placeholder = " Description";
    taskDescriptionInput.id = "task-description-input";
    taskDescriptionInput.className = "task-input";
    

    const taskCategoryFieldset = document.createElement("fieldset")
    taskCategoryFieldset.className = "category-feild";

    const categoryLabel = document.createElement("label");
    categoryLabel.htmlFor = "task-category";
    categoryLabel.textContent = "Category: "

    const taskCategoryInput = document.createElement("select");
    taskCategoryInput.id = "task-category-input"
    taskCategoryInput.className = "task-input"
   
    
    categories.forEach((option, index) =>{
        const options = document.createElement("option")
        options.value = option;
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
    

    dateFieldset.append(dateLabel,dateInput);

    const addTaskFormbtn = document.createElement("button")
    addTaskFormbtn.textContent = "Add Task"
    addTaskFormbtn.className = "add-task-form-btn"
    addTaskFormbtn.addEventListener("click", function(e){
        e.preventDefault();
        addTask(tasks,taskTextInput.value,taskCategoryInput.value,taskDescriptionInput.value,dateInput.value);
       detailsTaskDiv.innerHTML = " ";
        
    })

    addtaskDiv.append(addHeading,taskTextInput,taskDescriptionInput,taskCategoryFieldset,dateFieldset,addTaskFormbtn);
    detailsTaskDiv.append(addtaskDiv);
}

function addTask(tasks,text,category,date,description){
    const task = {
        check:null,
        text:text,
        category:category,
        date:date,
        description:description
    }
    tasks.push(task)
    console.log(tasks);
    displayTasks(tasks);
}

function displayTasks(tasks){
    
    const main_div = document.querySelector(".middle-panel")
    content_div.innerHTML = " ";
    tasks.forEach((task, tasksindex) => {
        
        const tasks_div = document.createElement("div");
        tasks_div.className = "task"

        tasks.id = tasks.id ++;
       
        const taskCheck = document.createElement("div");
        const taskCheckContent = document.createElement("input");
        taskCheckContent.type = "checkbox";
        taskCheckContent.className = "task-check";

        taskCheckContent.addEventListener("change", () =>{
            taskTextContent.classList.toggle("checked-task",taskCheckContent.checked)
            
        })

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

        const detailsDiv = document.querySelector(".details-panel");
        
        detailsbtn.className = "detailsbtn";
        detailsbtn.addEventListener("click", function(e){
            
            detailsDiv.style.visibility = detailsDiv.style.visibility === 'hidden' ? 'visible' : 'hidden';
            displayDetails(tasks,tasksindex,task.text,task.description,task.category,task.date);
        })

        tasks_div.append(taskCheck,taskText,detailsbtn);

        content_div.append(tasks_div);
        
    });
    
    main_div.append(content_div)
}

function displayDetails(tasks,tasksindex,tasktext,taskdescription,taskcategory,taskdate){
    
    
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
        options.value = option;
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
       deleteTask(tasks,tasksindex)
       detailsDiv.innerHTML = " ";
       displayTasks(tasks);
       
    })

    const saveChangesbtn = document.createElement("button")
    saveChangesbtn.textContent = "Save Changes";
    saveChangesbtn.className = "save-taskbtn"
    saveChangesbtn.addEventListener("click", function(e){
        e.preventDefault();
        saveChanges(tasks,
                    tasksindex,
                    taskTextInput.value,
                    taskDescriptionInput.value,
                    taskCategoryInput.value,
                    dateInput.value );   //get the text content of the selected value
        detailsDiv.innerHTML = " ";
        displayTasks(tasks);
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

function deleteTask(tasks,tasksindex){
   tasks.splice(tasksindex, 1);
    content_div.innerHTML = " ";
    console.log(tasks);
    displayTasks(tasks);
   
   
}

function saveChanges(tasks,tasksindex,text,description,category,date){
    /*
        create the logic to update the values of the task
    */
            content_div.innerHTML = " "
            allTasks[tasksindex].text = text;
            allTasks[tasksindex].description = description;
            allTasks[tasksindex].category = category;
            allTasks[tasksindex].date = date;
            console.log(tasks);
            displayTasks(tasks);
}

function addCategory(){
    const contentDiv = document.querySelector(".middle-panel");
    contentDiv.innerHTML = "";
    const mainDiv = document.createElement("div");
    
    const categorySec = document.querySelector(".category-container")
   
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Enter Category name: "

    const inputText = document.createElement("input")
    inputText.type = "text"

    const addCategorybtn = document.createElement("button");
    addCategorybtn.textContent = "Add"
    addCategorybtn.className = "add-category-btn2"
    addCategorybtn.addEventListener("click",()=>{
        categories.push(inputText.value)
        displayCategories();
        
    })

    mainDiv.append(inputLabel,inputText,addCategorybtn);

    contentDiv.append(mainDiv);
}