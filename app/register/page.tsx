'use client'
import Image from 'next/image'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const formSchema = z.object({
    username: z.string(),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})
function page() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    // Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // This will be type-safe and validated.
        console.log(values.email)
    }
    return (
        <div className='relative flex h-screen w-[100%]'>
            <div className='absolute h-screen w-[100%]'>
                <Image src='/backimage.jpg' alt='' className='w-full h-full object-cover' height={1000} width={1000} />
            </div>
            <div className='absolute h-full w-full flex items-center justify-center'>
                <div className='bg-gray-200 text-black px-10 py-10 rounded-xl w-[28%] h-fit'>
                    <div className='font-bold text-center text-2xl'>Register</div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username :</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your username" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Please enter your email address.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email :</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Please enter your email address.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password :</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your password" type="password" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Please enter your password.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='mt-8'>
                                <Button type="submit" className='w-full'>Register</Button>
                            </div>
                        </form>
                        <div className='text-black text-center w-full mt-2 font-normal text-sm'>
                            Already have an account?
                            <Link className='text-center text-primary ml-1' href="/login">Login</Link>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default page