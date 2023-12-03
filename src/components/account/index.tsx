import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function AccountComponent() {
    return (
        <Menu as="li" className="relative">
            <Menu.Button className="align-middle rounded-full outline-ring-purple">
                <Image
                    src="/../img-navbar/img-navbar.jpg"
                    width={100}
                    height={100}
                    alt="image navbar"
                    style={{
                        width: "2rem",
                        height: "2rem",
                        objectFit: "cover",
                        borderRadius: "50%",
                    }}
                    priority
                />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items as="ul" className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                    <Menu.Item as="li" className="flex">
                        <Link href="/" className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                            <svg className="w-4 h-4 mr-3" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Log out
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
