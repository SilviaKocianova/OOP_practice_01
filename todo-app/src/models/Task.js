class Task {
    constructor(title) {
        this.title = title;
        this.completed = false; //every tasks begins as unfinished
    }


    //state of the task
    toggleComplete() {
        this.completed = !this.completed; //value switch
    }
}

export default Task;