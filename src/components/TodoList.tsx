import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';


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

    function handleSubmit(e: React.FormEvent) {
        //TODO: add date picker
        e.preventDefault();
        addNewToList({ title: title, done: false, finishDate: new Date("December 17, 1995 03:24:00") });
        setTitle("")
    }

    return (
        // TODO: add sort function
        <div style={{maxWidth: "500px", margin: "16px", padding:"16px", boxShadow: "4px 4px 16px -16px rgba(66, 68, 90, 1)"}}>
            {/* <button onClick={sortByTitle}>Aa</button> */}
            <List>
                {list.map((todo, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton onClick={() => removeFromList(index)}><DeleteIcon/></IconButton>
                        }
                    >
                        <TodoListItem
                            title={todo.title}
                            done={todo.done}
                            finishDate={todo.finishDate}
                        />
                    </ListItem>
                ))
                }
            </List>
            <div
                id="addNewTodo">
                <form id="add-new-form" onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        value={title}
                        autoComplete="off"
                        onChange={
                            e => setTitle(e.target.value)
                        }
                        type="text" />
                    <Button
                        variant="outlined"
                        onClick={
                            (e) => { handleSubmit(e) }}>
                        +
                    </Button>
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
            <ListItemText
                    primary={props.title}
                    onClick={() => { changeState(!done); console.log('klik') }}
                    secondary={props.finishDate ? props.finishDate.toDateString() : null}
                  />
        </div>
    );
};

// {this.state.weatherData != null
//     ? <Weather weatherData={this.state.weatherData}/>
//     : <p>Loading...</p>
// }


// <List dense={dense}>
// {generate(
//   <ListItem
//     secondaryAction={
//       <IconButton edge="end" aria-label="delete">
//         <DeleteIcon />
//       </IconButton>
//     }
//   >
//     <ListItemAvatar>
//       <Avatar>
//         <FolderIcon />
//       </Avatar>
//     </ListItemAvatar>
//     <ListItemText
//       primary="Single-line item"
//       secondary={secondary ? 'Secondary text' : null}
//     />
//   </ListItem>,
// )}
// </List>