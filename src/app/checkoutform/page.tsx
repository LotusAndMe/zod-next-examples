"use client";


import React, { useState } from "react";
import { useForm,SubmitHandler } from 'react-hook-form'

type Inputs = {
    email: string,
    password: string,
    confirmPassword:string
}

export default function FormWithoutReactHookForm() {
    const { register,  formState: { errors, isSubmitting } } = useForm<Inputs>()
    

  const onSubmit:SubmitHandler<Inputs> = data=>console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li
              key={error}
              className="bg-red-100 text-red-500 px-4 py-2 rounded"
            >
              {error}
            </li>
          ))}
        </ul>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        required
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
