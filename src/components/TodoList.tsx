import React, { useState, useEffect } from "react";

interface Todo {
    title: string;
    done: boolean;
    finishDate?: Date;
}

export function TodoListView() {

    const [title, setTitle] = useState("")

    const initList: Todo[] = [
        { title: "Zrobić todo liste", done: true, finishDate: new Date("December 17, 1995 03:24:00") },
        { title: "Zrobić sortowanie", done: false },
        { title: "Zrobić edycje istniejących", done: false }
    ]
    const [list, updateList] = useState(initList)

    function addNewToList(newTodo: Todo) {
        const newList: Todo[] = [];
        newList.push(...list, newTodo)
        updateList(newList)
    }

    function removeFromList(index: number) {
        const newList: Todo[] = [];
        newList.push(...list)
        newList.splice(index, 1)
        updateList(newList)
    }
    return (
        // TODO: add sort function
        <div>
            {/* <button onClick={sortByTitle}>Aa</button> */}
            <ul>
                {list.map((todo, index) => (
                    <li
                        key={index}
                    >
                        <TodoListItem
                            title={todo.title}
                            done={todo.done}
                            finishDate={todo.finishDate}
                        />
                        <button onClick={() => removeFromList(index)}>x</button>
                    </li>
                ))
                }
            </ul>
            <div
                id="addNewTodo">
                <form id="add-new-form">
                    <input
                        id="title-input"
                        value={title}
                        onChange={
                            e => setTitle(e.target.value)
                        }
                        type="text" />
                    <button onClick={
                        (e) => {
                            e.preventDefault();
                            addNewToList({ title: title, done: false, finishDate: new Date("December 17, 1995 03:24:00") });
                            setTitle("")
                        }}>
                        +
                    </button>
                </form>
            </div>
        </div>
    );
}

function TodoListItem(props: Todo) {
    const [done, changeState] = useState(false)
    const [deleted, deleteTodo] = useState(false)
    return (
        <div id="item" style={{ textDecoration: done ? 'line-through' : undefined }}>
            <label>
                <p id="title" onClick={() => { changeState(!done); console.log('klik') }}>{props.title}</p>
                {props.finishDate != undefined ?
                    <p id="date">{props.finishDate.toDateString()}</p> : <></>}

            </label>
        </div>
    );
};
