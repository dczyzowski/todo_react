import { useState } from "react";
import Todo from "../common/types";
import TodoListItem from "./TodoListItem";

import initList from "../common/data"
import NewTodo from "./NewTodo/NewTodo";

import "./Todos.scss"

export function Todos() {

    const [list, setList] = useState<Todo[]>(initList);
    const [todoId, setTodoId] = useState(list.length + 1);

    function addNewToList(newTodo: Todo) {
        setTodoId(todoId + 1)
        setList(prevList => [...prevList, newTodo])
    }

    function removeFromList(index: number) {
        setList(prevList => [...prevList].filter((item) => (item.id !== index)));
    }

    const editTitle = (newTitle: string, index: number) => {

        setList(prevList => {
            prevList[index].title = newTitle;
            return [...prevList]
        })
    }

    return (
        <div className="todos">
            <div className="todos__title">
                <h2>TODOS</h2>
                <a className="todos__numbers">{list.length}</a>
            </div>
            <NewTodo
                onAddNewTodo={addNewToList}
                lastTodo={todoId} />
            <div className="todos__list">
                {list.map((item, index) => {
                    return (
                        <TodoListItem
                            key={index}
                            todoItem={item}
                            onDelete={removeFromList}
                            onEditTitle={(newTitle) => { editTitle(newTitle, index) }}
                        />
                    );
                })
                }
            </div>
        </div>
    );
}


