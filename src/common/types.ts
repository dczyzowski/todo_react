// model of Todo object
export default interface Todo {
    id: number;
    title: string;
    details?: string;
    done: boolean;
    finishDate?: Date;
    inEdit?: boolean;
}