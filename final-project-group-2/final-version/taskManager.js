function createTaskHtml(id, name, description, assignedTo, dueDate, status) {
    
    let html = `<div class="card-body">
    <h5 class="card-title font-weight-bold">Task-1</h5>
    <div class="card-header"> take out trash ${name} </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${description} </li>
        <li class="list-group-item"> ${assignedTo} </li>
        <li class="list-group-item"> ${dueDate} </li>
        <li class="list-group-item text-warning"> ${status} </li>
        <button class = "btn btn-primary" type = "button" >Delete</button>
    </ul>
</div>`
    return html;

}

class TaskManager {
    constructor(currentId, date) {
        this.tasksArray = [];
        this.currentId = 0;
        this.date = date;


    }

    addTask(name, description, assignedTo, dueDate, status) {
    
        this.currentId++;
        this.tasksArray.push([`Id: ${this.currentId}`, `Name: ${name}`,`Description: ${description}`,`Assigned to: ${assignedTo}`,`Due Date: ${dueDate}`,`Status: ${status}`]);
        this.render();
    }

    render() {

        let tasksHtmlList = [];
        alert(this.tasksArray.length);
        for (let i = 0; i < this.tasksArray.length; i++) {
          let returnHtml =   createTaskHtml(this.tasksArray[i][0],this.tasksArray[i][1],this.tasksArray[i][2],this.tasksArray[i][3],this.tasksArray[i][4],this.tasksArray[i][5]);
            tasksHtmlList.push(returnHtml); 
           console.log(returnHtml);
            

        } 
    }

}



//let tasks = new TaskManager();
//tasks.addTask("school pickup", "pick up john from school", "Jennifer Smith", "01/21/2021", "TODO");

//tasks.addTask("dish wash", "wash it with soap", "Abdi cole", "01/31/2021", "pending");
// console.log(tasks);




