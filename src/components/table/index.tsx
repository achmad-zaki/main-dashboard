import { twMerge } from "tailwind-merge";

interface TableProps {
    bodies: any[];
    headers: any[];
    className?: string;
}

export default function TableComponent(props: TableProps) {
    const {
        bodies,
        headers,
        className,
    } = props

    return (
        <div className={twMerge(`w-full overflow-hidden shadow-xs`, className)}>
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            {headers.map((header, index) => (
                                <th key={index} className="px-4 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {bodies.map((body, index) => (
                            <tr key={index} className="text-gray-700 dark:text-gray-400">
                                {headers.map((head, index) => (
                                    <td key={index} className="px-4 py-3">
                                        {head === "status" ? (
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-green-700">
                                                {body[head]}
                                            </span>
                                        ) : (
                                            body[head]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
