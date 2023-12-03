"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLink } from "./menuLink";

// component
import MobileSidebarComponent from "./mobile-sidebar";

export default function SidebarComponent() {
    const pathname = usePathname()

    return (
        <>
            <aside className='z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'>
                <div className='py-4 text-gray-500 dark:text-gray-400'>
                    <Link href="/" className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'>Template</Link>
                    <ul className='mt-6'>
                        {menuLink.map((item, index) => (
                            <li key={index} className='relative px-6 py-3'>
                                {pathname === item.href && (
                                    <span className='absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg'></span>
                                )}
                                <Link href={item.href} className={`${pathname === item.href ? 'text-gray-800 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'} inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}>
                                    {item.icon}
                                    <span className='ml-4 capitalize'>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <MobileSidebarComponent />
        </>
    )
}
