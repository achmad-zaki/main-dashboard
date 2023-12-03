interface CardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    variant: "red" | "green" | "blue" | "orange";
}

export default function CardComponent(props: CardProps) {
    const {
        title,
        count,
        icon,
        variant,
    } = props

    let variantColor;

    if (variant === "red") {
        variantColor = "card-variant-red"
    } else if (variant === "green") {
        variantColor = "card-variant-green"
    } else if (variant === "blue") {
        variantColor = "card-variant-blue"
    } else if (variant === "orange") {
        variantColor = "card-variant-orange"
    }

    return (
        <div className="flex items-center p-4 bg-white shadow-xs dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <div className={variantColor}>
                {icon}
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                    {title}
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {count}
                </p>
            </div>
        </div>
    )
}
