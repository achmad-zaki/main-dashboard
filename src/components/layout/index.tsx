"use client"

import { usePathname } from "next/navigation";
import NavbarComponent from "../navbar";
import SidebarComponent from "../sidebar";

export default function MainLayout({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <SidebarComponent />
      <div className="flex flex-col flex-1 w-full">
        <NavbarComponent />
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 capitalize">{pathname.split("/").pop()}</h2>
            <div className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-blue-600 shadow-md focus:outline-none focus:shadow-outline-purple">
              <span>Welcome</span>
              <span>breadcrumb</span>
            </div>
            {/*main content here  */}
            {children}
            {/* end content */}
          </div>
        </main>
      </div>
    </div>
  )
}
