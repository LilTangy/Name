import cls from "./TodoList.module.scss";
import {useAppSelector} from "../../../store/reduxHooks";
import {TodoItem} from "../../../shared/TodoItem/TodoItem.tsx";

export const TodoList = () => {

    const todoList = useAppSelector(state => state.todoReducer.todoList);
	const filterStatus = useAppSelector(state => state.todoReducer.filterStatus);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))

	const filteredTodoList = sortedTodoList.filter((item) => {
		if (filterStatus === "all") {
			return true
		}
		return item.status === filterStatus
	})

    return (
        <div className={cls.TodoList}>
            {filteredTodoList && filteredTodoList.length > 0
                ? filteredTodoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)
                : 'No todo found'
            }
        </div>
    );
};