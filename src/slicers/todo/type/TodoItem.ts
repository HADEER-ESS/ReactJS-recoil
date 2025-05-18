interface TodoItem {
    id : number,
    task : string,
    note? : string,
    isComplete: boolean
    // status : StatusType;
}

export const Status =  {
    TODO : 'TODO',
    PROGRESS : 'PROGRESS',
    DONE : 'DONE'
}

type StatusType = typeof Status[keyof typeof Status]

export default TodoItem;