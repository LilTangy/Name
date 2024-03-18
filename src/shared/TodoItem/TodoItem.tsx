import cls from "./TodoItem.module.scss";
import {classNames} from "../../helpers/classNames/classNames.ts";
import {Button} from "../Button";
import {useAppDispatch} from "../../store/reduxHooks";
import {todoSlice} from "../../store/reducers/TodoSlice.ts";
import {StatusValue, TodoModal} from "../TodoModal/TodoModal.tsx";
import {useState} from "react";

export interface Todo {
    id: number,
    title: string,
    status: string,
    time: string
}

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ({todo}: TodoItemProps) => {

    const [isUpdating, setIsUpdating] = useState(false)
	const [checked, setChecked] = useState<boolean>(false)

    const {deleteTodo, updateTodo} = todoSlice.actions
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleUpdate = () => {
        console.log('update')
        setIsUpdating(true);
    }

	const handleChange = () => {
		setChecked((prev) => !prev)
		dispatch(updateTodo({
			...todo,
			status: checked ? StatusValue.incomplete : StatusValue.complete
		}))
	}

    return (
        <>
            <div className={cls.TodoItem}>
				<Button onClick={handleChange} as="button" >Change status</Button>
                <p className={classNames(
                    cls.todo,
                    {
                    [cls.complete]: todo.status==="complete"
                },
                    [])}>{todo.title}</p>
                <p>{todo.time}</p>
                <div>
                    <Button onClick={handleDelete} as={"button"}>delete</Button>
                    <Button onClick={handleUpdate} as={"button"}>update</Button>
                </div>
            </div>
            <TodoModal todo={todo} type={"Update"} isOpen={isUpdating} onClose={() => {setIsUpdating(false)}} />
        </>
    );
};