import { displayCategories, displayTodaysTasks, displayUpcomingTasks} from "./pages/todaysTask.js"



//create the today page

 function displayToday(){
        const today_link = document.getElementById("today")
        today_link.addEventListener("click", function(e){
            displayTodaysTasks();
        })
    }
   

 function displayUpcoming(){
    const upcoming_link = document.getElementById("upcoming");
    upcoming_link.addEventListener("click", function(e){
        displayUpcomingTasks();
    })
 }

 displayToday();
 displayUpcoming();
 displayCategories();





