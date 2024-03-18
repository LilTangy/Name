import {Provider} from "react-redux";
import {setupStore} from "../../../store/store.ts";
import {ReactNode} from "react";

interface StoreProviderProps {
    children: ReactNode;
}

const store = setupStore()

export const StoreProvider = ({children}: StoreProviderProps) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};