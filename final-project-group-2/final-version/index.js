let tasks = new TaskManager();
tasks.addTask("school pickup", "pick up john from school", "Jennifer Smith", "01/21/2021", "TODO");

tasks.addTask("dish wash", "wash it with soap", "Abdi cole", "01/31/2021", "pending");


let formField = document.getElementById("formField");
let textField = document.getElementById("textField");
let taskDescription = document.getElementById("taskDescription");
let personAssigned = document.getElementById("personAssigned");
let dueDate = document.getElementById("dueDate");
let status = document.getElementById("status");


formField.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!textField.value || !taskDescription.value || !personAssigned.value || !status.value) {
        alert("Please fill all the field")
    } else {

        tasks.addTask(textField.value, taskDescription.value, personAssigned.value, dueDate.value, status.value);
        
        console.log(tasks);
        formField.reset();






       /* 
        console.log("Name: " + textField.value);
        console.log("Task Description: " + taskDescription.value);
        console.log("Assigned to: " + personAssigned.value);
        console.log("Due Date: " + dueDate.value);
        console.log("Status: " + status.value);
        */
    }
}) 

// let taskHtml = createTaskHtml(textField.value, taskDescription.value, personAssigned.value, dueDate.value, status.value);
//console.log(taskHtml);


