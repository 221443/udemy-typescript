import axios from "axios";
import { todo } from "node:test";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => { 
    const todo = response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
        The todo with ID: ${ID}
        has a title of: ${title}
        Is it completed? ${completed}
    `)
});

