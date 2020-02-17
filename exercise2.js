// A. Create an array of strings
var tasks = [];
console.log("");
// B. Create a function to add a task in to the array, call it `addTask`,
//the function has to accept a string and doesn't have to return anything.
function addTask(task) {
    var y;
    tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log('Task "' + task + '" inserted in the list');
    y = tasks.length;
    return y;
}
// C. Create a function to list all tasks, it must show in the console the task.
function listAllTasks() {
    console.log("");
    console.log("START: Items on list");
    console.log("");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("");
    console.log("END: Items on list");
    console.log("");
}
// D. Create a function to delete a task, you must find the task inside
// the array and delete it.
function deleteTask(x) {
    var key = x;
    var index = tasks.indexOf(key, 0);
    //https://www.tutorialspoint.com/typescript/typescript_array_indexof.html
    if (index > -1) { // if >-1 this implies a match was found.
        tasks.splice(index, 1);
        //https://www.tutorialspoint.com/typescript/typescript_array_splice.html
    }
    console.log("=========== TASK REMOVED ===========");
    console.log('Task "' + x + '" removed from the list');
    return tasks.length;
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('This is our second task!!!'));
listAllTasks();
console.log("Number of items:", deleteTask('This is our second task!!!'));
listAllTasks();
