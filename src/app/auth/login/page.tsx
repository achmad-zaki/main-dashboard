"use client"

import Image from "next/image"

// components
import { useForm } from "react-hook-form"

// component
import FormControllComponent from "@/components/form_controll"
import ButtonComponent from "@/components/button"

export default function LoginPage() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <Image
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                            src="/img-login/login-office-dark.jpeg"
                            alt="Office"
                            priority
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-2 text-xl text-gray-700 dark:text-gray-200 font-bold">
                                Selamat Datang di Admin Panel
                            </h1>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, deserunt?</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControllComponent
                                    className="mt-6"
                                    label="email"
                                    name="email"
                                    register={register}
                                    placeholder="Input your email"
                                    type="text"
                                />
                                <FormControllComponent
                                    className="mt-4"
                                    label="password"
                                    name="password"
                                    register={register}
                                    placeholder="Input your password"
                                    type="password"
                                />
                                <ButtonComponent
                                    className="mt-8 px-4 py-2 w-full"
                                    type="submit"
                                    variant="primary"
                                >
                                    Login
                                </ButtonComponent>
                            </form>
                        </div>
                        <p className="text-center mt-8 dark:text-gray-400 text-xs font-light">Copyright &copy; 2023 by Zaki</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
