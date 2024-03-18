import { todoSlice } from "../../../store/reducers/TodoSlice";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import cls from "./HeaderTodo.module.scss";

export const HeaderTodo = () => {

	const {updateFilterStatus} = todoSlice.actions;
	const dispatch = useAppDispatch();

	const filterStatus = useAppSelector((state) => state.todoReducer.filterStatus)

	const updateFilter = (e: { target: { value: string; }; }) => {
		dispatch(updateFilterStatus(e.target.value))
	}

    return (
        <div className={cls.HeaderTodo}>
            <select value={filterStatus} onChange={updateFilter}>
                <option value={"all"}>All</option>
                <option value={"incomplete"}>Incomplete</option>
                <option value={"complete"}>Complete</option>
            </select>
        </div>
    );
};