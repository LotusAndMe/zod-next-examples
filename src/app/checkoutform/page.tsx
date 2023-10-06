"use client";

import { error } from "console";
import React, { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const inputsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Password must match",
    path:['confirmPassword']
})

type Inputs = z.infer<typeof inputsSchema>

export default function FormWithoutReactHookForm() {
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors, isSubmitting } } = useForm<Inputs>()
    

    const onSubmit:SubmitHandler<Inputs> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('su')
        console.log(data)
        reset()
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
   
                <input
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded"
                />
                {errors.email &&
                    <p className="text-red-500">{`${errors.email.message}`}</p>
                }
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 rounded"
                />
                {errors.password &&
                    <p className="text-red-500">{`${errors.password.message}`}</p>
                }
                <input
                    {...register('confirmPassword')}
                    type="password"
                    placeholder="Confirm password"
                    className="px-4 py-2 rounded"
                />
                {errors.confirmPassword &&
                    <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
                }
                <input
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
                />
            </form>
        </div>
    );
};
