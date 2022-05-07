import React, { useState, useEffect } from "react";

export function TodoListView() {
    interface Todo {
        title: string;
        description: string;
    }
    const initList : Todo[] = [
        { title: "Zrobić todo liste", description: "zrobić edytowanie listy"},
        { title: "Zrobić todo liste", description: "zrobić edytowanie listy"},
        { title: "Zrobić todo liste", description: "zrobić edytowanie listy"}
      ]
      let title : string
      const [list, updateList] = useState(initList)

    function addNewToList(newTodo: Todo){
        const newList: Todo[] = [];
        newList.push(...list, newTodo)
        updateList(newList)
      }

    function removeFromList(index: number){
        const newList: Todo[] = [];
        newList.push(...list)  
        newList.splice(index,1)
        updateList(newList)
    }
    return (
    <div>
        {/* <button onClick={sortByTitle}>Aa</button> */}
        <ul>
            {list.map((todo, index) => (
                <li 
                key={index}
                >
                    <TodoListItem title={todo.title} description={todo.description} />
                    <button onClick={() => removeFromList(index)}>x</button>
                </li>
            ))
            }
        </ul>
        <div id="addNewTodo">
            <form >
                <input 
                onChange={
                    e => title = e.target.value
                } 
                    type="text"/>
                <button onClick={
                    (e) => {
                        e.preventDefault();
                        addNewToList({title: title, description:"description"});
                    }}>
                         +
                </button>
            </form>
        </div>
    </div>
  );
}

function TodoListItem(props: {title: string, description: string}) {
    const [done, changeState] = useState(false)
    const [deleted, deleteTodo] = useState(false)
    return (
        <div id="item" style={{textDecoration: done ? 'line-through' : undefined }}>
            <label>
                <p id="title" onClick={() => {changeState(!done); console.log('klik')}}>{props.title}</p>
                <p id="description">{props.description}</p>
            </label>
        </div>
    );
};

