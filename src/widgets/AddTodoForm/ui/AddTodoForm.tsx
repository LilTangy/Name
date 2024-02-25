import cls from "./AddTodoForm.module.scss";
import {Button} from "../../../shared/Button";

export const AddTodoForm = () => {

    return (
        <form className={cls.AddTodoForm}>
            <p>Add Task</p>
            <label>
                <p>Title</p>
                <input type={'text'} id={"title"}/>
            </label>
            <label>
                <p>Status</p>
                <select name={"status"} id={"status"}>
                    <option value={"incomplete"}>Incomplete</option>
                    <option value={"complete"}>Complete</option>
                </select>
            </label>
            <Button as={"button"} type={"submit"}>Add Task</Button>
        </form>
    );
};