import { MdOutlineDashboard } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";

export const menuLink = [
    {
        title: "dashboard",
        href: "/dashboard/home",
        icon: <MdOutlineDashboard size={20} />
    },
    {
        title: "form",
        href: "/dashboard/form",
        icon: <FaWpforms size={20} />
    },
    {
        title: "card",
        href: "/dashboard/card",
        icon: <FiInbox size={20} />
    }
]