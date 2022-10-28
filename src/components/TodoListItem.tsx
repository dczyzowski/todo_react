import React, { ChangeEvent, useEffect, useState } from "react";
import Todo from "../common/types";

import './TodoListItem.scss'

// Item that contains every single element in TodoList
// Props: Todo object 

function TodoListItem(props: { todoItem: Todo, onDelete(index: number): void, onEditTitle(newTitle: string): void }) {
    const [inEdit, setEdit] = useState<boolean>(false);
    const [cardClass, setCardClass] = useState<string>("todo-item")

    const setTitle = (e: ChangeEvent<HTMLInputElement>) => {
        props.onEditTitle(e.target.value);
    }

    const onDeleteItem = () => {
        setCardClass("todo-item todo-item__hide");
        setTimeout(() => {props.onDelete(props.todoItem.id);}, 500);
    }

    const onClickSaveHandler = (e: ChangeEvent<any>) => {
        e.preventDefault();
        props.onEditTitle(e.target[0].value);
        setEdit(false);
    }

    const editBox = () => {
        return (
            <div className="todo-item__edit-box">
                <form className="todo-item__form" onSubmit={onClickSaveHandler}>
                    <input
                        className="todo-item__input"
                        type="text"
                        name="new-title"
                        value={props.todoItem.title}
                        onChange={setTitle}
                    />
                    <button
                        className="todo-item__submit-button"
                        type="submit">Zapisz</button>
                </form>
            </div>
        )
    }

    const showTitle = () => {
        return (
            <span
                className="todo-item__title"
                id="title"
                onClick={() => setEdit(true)}
            >
                {props.todoItem.title}
            </span>
        )
    }

    setTimeout(() => {setCardClass("todo-item todo-item__show");}, 500);

    return (
        <div className={cardClass}
            style={{ textDecoration: props.todoItem.done ? 'line-through' : undefined }}>
            <div className="todo-item__description">
                <div className="todo-item__title">
                    {inEdit ? editBox() : showTitle()}
                </div>
                <div className="todo-item__details">
                    {props.todoItem.details ? props.todoItem.details : "Dodaj opis"}
                </div>
            </div>
            <div className="todo-item__options">
                <button className="todo-item__remove-button button-brown" onClick={
                    () => onDeleteItem()}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;