import React, { useState, useEffect } from "react";

interface Todo {
    title: string;
    done: boolean;
    finishDate?: Date;
    inEdit: boolean;
    onEditChange?: () => void;
    onValueChange?: (arg0: string) => void;
    onDoneChange?: () => void;
}

export function TodoListView() {

    const initList: Todo[] = [
        { title: "Zrobić todo liste", done: true, finishDate: new Date("December 17, 1995 03:24:00"), inEdit: false },
        { title: "Zrobić sortowanie", done: false, inEdit: false },
        { title: "Zrobić edycje istniejących", done: false, inEdit: true }
    ]

    const [list, updateList] = useState(initList)
    const [title, setTitle] = useState("")


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

    const editTodo = () => {
        const newList: Todo[] = []
        newList.push(...list)
        updateList(newList)
    }

    return (
        // TODO: add sort function
        <div className="table">
            {/* <button onClick={sortByTitle}>Aa</button> */}
            <ul>
                {list.map((todo, index) => (
                    <div>
                    <li
                        className="item"
                        key={index}
                    >
                        <TodoListItem
                            title={todo.title}
                            done={todo.done}
                            inEdit={todo.inEdit}
                            onValueChange={(e: string) => {
                                todo.title = e;
                                editTodo()}}
                            onEditChange={() => {
                                todo.inEdit=false
                                editTodo()}}
                        />
                        <button onClick={() => removeFromList(index)}>x</button>
                        <button onClick={() => {
                            todo.inEdit=true;
                            editTodo()
                            }}>edit</button>
                    </li>
                     <hr/>
                    </div>

                ))
                }
            </ul>
            <div
                id="addNewTodo"
                className="add-new-todo">
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
                            addNewToList({ title: title, done: false, finishDate: new Date("December 17, 1995 03:24:00"), inEdit: false });
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
    const [title, setTitle] = useState(props.title);
    return (
        <div id="item" style={{ textDecoration: props.done ? 'line-through' : undefined }}>
            <label>
                {props.inEdit ?
                    <div>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                                if(props.onValueChange) props.onValueChange(e.target.value)
                            }}
                        />
                        <button 
                        onClick={(e) =>{
                            if(props.onEditChange) props.onEditChange()
                        }}>zapisz</button></div>
                    :
                    <span
                        id="title"
                        onClick={(e) => props.onDoneChange}
                    >{props.title}
                    </span>}
                {props.finishDate !== undefined ?
                    <p id="date">{props.finishDate.toDateString()}</p> : ""}
            </label>
        </div>
    );
};
