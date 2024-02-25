import cls from "./Button.module.scss";
import {ComponentProps, ElementType} from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
    children: string;
    as?: E;
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'
export const Button = <E extends ElementType = typeof defaultElement>({children, as, ...otherProps} : ButtonProps<E>) => {
    const TagName = as || defaultElement;
    return (
        <TagName {...otherProps} className={cls.Button}>
            {children}
        </TagName>
    );
};