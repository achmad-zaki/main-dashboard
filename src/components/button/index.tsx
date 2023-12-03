import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode;
    className?: any;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    variant: "primary" | "secondary" | "danger" | "success";
}

export default function ButtonComponent(props: Props) {
    const {
        children,
        type,
        onClick,
        variant,
        className
    } = props

    return (
        <button onClick={onClick} type={type} className={twMerge(`btn ${variant}`, className)}>
            {children}
        </button>
    )
}
