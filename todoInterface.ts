export interface todoInterface {
    tasks: Array<string>;
    addTask(x: string): number;
    listAllTasks();
    deleteTask(x: string): number;
}