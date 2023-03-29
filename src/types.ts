export type Todo = {
    text: string;
    complete: boolean;
}

export type toggleTodo = (selectedTodo: Todo) => void;