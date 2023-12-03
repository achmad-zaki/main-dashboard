import { twMerge } from "tailwind-merge";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";

interface Props {
    className?: string;
    placeholder?: string;
    label: string;
    name: string;
    register: any;
    type: "email" | "password" | "text" | "number"
}

export default function FormControllComponent(props: Props) {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const {
        className,
        placeholder,
        label,
        name,
        register,
        type
    } = props
    return (
        <div className={twMerge(className)}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1 uppercase">{label}</label>
            {type === "password" ?
                <div className="relative">
                    <input {...register(name)} className="block w-full text-sm border dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none dark:text-gray-300 p-3" type={showPassword ? "text" : "password"} placeholder={placeholder} />
                    <button onClick={togglePasswordVisibility} type="button" className="absolute dark:text-gray-400 inset-y-0 right-0 pr-3 flex items-center">
                        {showPassword ? <IoIosEyeOff size={20} /> : <IoMdEye size={20} />}
                    </button>
                </div>
                :
                <input {...register(name)} className="block w-full text-sm border dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none dark:text-gray-300 p-3" type={type} placeholder={placeholder} />
            }
        </div>
    )
}
