import {PageTitle} from "../../../shared/PageTitle";
import {HeaderTodo} from "../../../widgets/HeaderTodo";
import {useState} from "react";
import {Button} from "../../../shared/Button";
import {TodoList} from "../../../widgets/TodoList";
import {TodoModal} from "../../../shared/TodoModal/TodoModal.tsx";

const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <PageTitle>Todo App</PageTitle>
            <Button onClick={() => {setIsOpen(true)}} as={"button"}>Add Todo</Button>
            <HeaderTodo />
            <TodoList />
            <TodoModal type={"Add"} isOpen={isOpen} onClose={() => {setIsOpen(false)}} />
        </div>
    );
};

export default MainPage;