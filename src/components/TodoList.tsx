import React, { useState } from "react";
import { useArray } from "react-hanger"

export function TodoListView() {
    const initList = useArray([
        { title: "Zrobić todo liste", description: "zrobić edytowanie listy"},
        { title: "Zrobić todo liste", description: "zrobić edytowanie listy"},
        { title: "Zrobić todo liste", description: "zrobić edytowanie listy"}
      ])
    
      let title : string = "ssss";

    return (
    <div>
        <ul>
            {initList.value.map((todo, index) => (
                <li key={index} onClick={() => initList.removeIndex(index)}>
                    <TodoListItem title={todo.title} description={todo.description} />
                </li>
            ))
            }
        </ul>
        <div id="addNewTodo">
            <form >
                <input onChange={(e) => (title = e.target.value)} type="text"/>
                <button type="submit" onClick={() => initList.add({title: title, description:"description"})}> + </button>
            </form>
        </div>
    </div>
  );
}

type Props = {
    title: string;
    description: string;
    done: boolean;
    inEdit: boolean;
} & typeof defaultProps;

const defaultProps = {
    inEdit: false,
    done: false
}

function TodoListItem(props: Props) {
    const [done, changeState] = useState(true)
    return (
        <div id="item" style={{textDecoration: props.done ? 'line-through' : undefined }}>
            <label>
                <p id="title" onClick={() => {changeState(true); console.log('klik')}}>{props.title}</p>
                <p id="description">{props.description}</p>
            </label>
        </div>
    );
};

TodoListItem.defaultProps = defaultProps;

