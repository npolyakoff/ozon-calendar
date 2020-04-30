interface Tasks {
    [index: number]: { id: number; };
}
interface Task {
    text: string
    day: number
    finished: Boolean,
    id: number
}

interface AllTasks {
   month: Task[]
}