import Todo from "./types";

const initList : Todo[] = [
    { id: 1, title: "Zrobić todo liste", done: true, finishDate: new Date("December 17, 1995 03:24:00"), inEdit: false },
    { id: 2, title: "Zrobić sortowanie", done: false, inEdit: false },
    { id: 3, title: "Zrobić edycje istniejących", done: false, inEdit: true }
]

export default initList;