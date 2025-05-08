import { displayTodaysTasks } from "./pages/todaysTask.js"

//create the today page

    function displayToday(){
        const today_link = document.getElementById("today")

        today_link.addEventListener("click", function(e){
            /*
            create the display of all the tasks and append it to the middle panel
            */

            displayTodaysTasks();
        })
    }

    displayToday();






