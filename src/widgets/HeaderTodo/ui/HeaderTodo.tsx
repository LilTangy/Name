import cls from "./HeaderTodo.module.scss";
import {Button} from "../../../shared/Button";

export const HeaderTodo = () => {

    return (
        <div className={cls.HeaderTodo}>
            <Button as={"button"} type={"button"}>Click me</Button>
            <select>
                <option value={"all"}>All</option>
                <option value={"incomplete"}>Incomplete</option>
                <option value={"complete"}>Complete</option>
            </select>
        </div>
    );
};