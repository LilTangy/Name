import cls from "./PageTitle.module.scss";
interface PageTitleProps {
    children: string
}

export const PageTitle = ({children}: PageTitleProps) => {

    return (
        <p className={cls.PageTitle}>
            {children}
        </p>
    );
};