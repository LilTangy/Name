import {PageTitle} from "../../../shared/PageTitle";
import {HeaderTodo} from "../../../widgets/HeaderTodo";
import {Modal} from "../../../shared/Modal/Modal.tsx";
import {useState} from "react";
import {Button} from "../../../shared/Button";
import {AddTodoForm} from "../../../widgets/AddTodoForm";

const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <PageTitle>Todo App</PageTitle>
            <HeaderTodo />
            <Button onClick={() => {setIsOpen(true)}} as={"button"}>Open modal</Button>
            <Modal isOpen={isOpen} onClose={() => {setIsOpen(false)}}>
                <AddTodoForm/>
            </Modal>
        </div>
    );
};

export default MainPage;