import { useStore } from "@/store";
import Image from "next/image";

// icon
import { FaBars } from "react-icons/fa";

// component
import SwitchThemeComponent from "../switch-theme";
import NotificationComponent from "../notification";
import AccountComponent from "../account";

export default function NavbarComponent() {
    const { toggleSidebar } = useStore()

    return (
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-blue-600 dark:text-purple-300">
                <button onClick={toggleSidebar} className="p-2 -ml-1 md:hidden outline-ring-purple rounded-sm">
                    <FaBars size={18} />
                </button>
                <ul className="flex items-center flex-shrink-0 space-x-6 md:w-full md:justify-end">
                    <li className="flex">
                        <SwitchThemeComponent />
                    </li>
                    <NotificationComponent />
                    <AccountComponent />
                </ul>
            </div>
        </header>
    )
}
