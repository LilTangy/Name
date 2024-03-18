import {createSlice} from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todoList');
    if (localTodoList) {
        return JSON.parse(localTodoList)
    }
    window.localStorage.setItem('todoList', JSON.stringify([]));
    return [];
}

const initialState = {
	filterStatus: "all",
    todoList: getInitialTodo()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoListArray = JSON.parse(todoList);
                todoListArray.push({
                    ...action.payload
                })
                window.localStorage.setItem('todoList', JSON.stringify(todoListArray))
            } else {
                window.localStorage.setItem(
                    'todoList',
                    JSON.stringify([{...action.payload}])
                )
            }
        },
        deleteTodo(state, action) {
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoListArray = JSON.parse(todoList);
                todoListArray.forEach((todo, i) => {
                    if (todo.id === action.payload) {
                        todoListArray.splice(i, 1);
                    }
                });
                window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
                state.todoList = todoListArray;
            }
        },
        updateTodo(state, action) {
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoListArray = JSON.parse(todoList);
                todoListArray.forEach((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.status = action.payload.status;
                        todo.title = action.payload.title;
                    }
                })
                window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
                state.todoList = todoListArray;
            }
        },
		updateFilterStatus(state, action) {
			state.filterStatus = action.payload;
		}
    }
})

export default todoSlice.reducer;