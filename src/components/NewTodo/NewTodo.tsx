import React, { ChangeEvent, useState } from "react";
import Todo from "../../common/types";
import './NewTodo.scss'

const NewTodo = (props: { onAddNewTodo(todo: Todo): void, lastTodo: number }) => {

    const [title, setTitle] = useState("")

    const addNewTodoHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onAddNewTodo({
            id: props.lastTodo,
            title: title,
            details: "Jakiś opis z dupci",
            done: false,
            finishDate: new Date("December 17, 1995 03:24:00"),
            inEdit: false
        });
        setTitle("");
    }

    const setTitleHandler = (e : ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    return (
        <div
            id="addNewTodo"
            className="new-todo">
            <form className="new-todo__form" onSubmit={addNewTodoHandler}>
                <input
                    id="new-todo-input"
                    className="new-todo__input"
                    placeholder="New Todo"
                    value={title}
                    onChange={setTitleHandler}
                    type="text" />
                <label htmlFor="new-todo-input" className="new-todo__input-label">New Todo</label>
                <button
                    className="new-todo__submit-button button-brown"
                    type="submit">
                    +
                </button>
            </form>
        </div>
    )
}

export default NewTodo