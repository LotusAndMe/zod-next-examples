"use client";


import React, { useState } from "react";
import { useForm,SubmitHandler } from 'react-hook-form'


type Inputs = {
    email: string,
    password: string,
    confirmPassword:string
}

export default function FormWithoutReactHookForm() {
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors, isSubmitting } } = useForm<Inputs>()
    

    const onSubmit = async (data:any) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('su')
        console.log(data)
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
   
            <input
                {...register('email', { required: 'Email required' })}
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded"
            />
          
            <input
                {...register('password', { required: "Password required", minLength: { value: 10, message: "Password must be at least 10 characters" } })}
                type="password"
                placeholder="Password"
                className="px-4 py-2 rounded"
            />
            <input
                {...register('confirmPassword', { required: 'Passord confirm required' })}
                type="password"
                placeholder="Confirm password"
                className="px-4 py-2 rounded"
            />

            <input
                type="submit"
                className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
            />
        </form>
        </div>
    );
};
