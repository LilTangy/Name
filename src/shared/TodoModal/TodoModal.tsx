import cls from "./TodoModal.module.scss";
import {useCallback, useEffect, useRef, useState, MouseEvent} from "react";
import {classNames} from "../../helpers/classNames/classNames.ts";
import {Portal} from "../Portal/Portal.tsx";
import {Button} from "../Button";
import {todoSlice} from "../../store/reducers/TodoSlice.ts";
import {useAppDispatch} from "../../store/reduxHooks";
import {Todo} from "../TodoItem/TodoItem.tsx";

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    type: "Update" | "Add";
    todo?: Todo
}

export enum StatusValue {
    "complete" = "complete",
    "incomplete" = "incomplete"
}

const ANIMATION_DELAY = 300;

export const TodoModal = (props: ModalProps) => {

    const {
        className, isOpen, onClose, type, todo
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<StatusValue>(StatusValue.incomplete);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const {addTodo, updateTodo} = todoSlice.actions
    const dispatch = useAppDispatch();

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        if (title && status) {
            if (type === "Add") {
                dispatch(addTodo({
                    id: Math.random(),
                    title,
                    status,
                    time: new Date().toLocaleString(),
                }))
                closeHandler();
            } else if ( type === "Update") {
                if (todo?.title !== title || todo?.status !== status) {
                    dispatch(updateTodo({
                        ...todo,
                        title,
                        status,
                    }))
                    closeHandler();
                }

            }
        }
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
                setTitle('');
                setStatus(StatusValue.incomplete);
            }, ANIMATION_DELAY)
        }
    },[onClose] )

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [isOpen]);

    useEffect(() => {
        if (type === "Update" && todo) {
            setTitle(todo.title);
            setStatus(todo.status);
        } else {
            setTitle("");
            setStatus(StatusValue.incomplete)
        }
    }, [type, todo, isOpen]);

    return (
        <Portal>
            <div className={classNames(cls.AddTodoModal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        <form className={cls.AddTodoForm}>
                            <p>{type} Task</p>
                            <label>
                                <p>Title</p>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type={'text'} id={"title"}/>
                            </label>
                            <label>
                                <p>Status</p>
                                <select value={status} onChange={(e) => setStatus(e.target.value)} name={"status"} id={"status"}>
                                    <option value={"incomplete"}>Incomplete</option>
                                    <option value={"complete"}>Complete</option>
                                </select>
                            </label>
                            <Button as={"button"} type={"submit"} onClick={handleSubmit}>{type} Task</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Portal>
    );
};