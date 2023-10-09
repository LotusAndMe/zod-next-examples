"use client";


import { TSignUpSchema, signUpSchema } from "@/lib/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'



export default function FormWithoutReactHookForm() {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting } } = useForm<TSignUpSchema>({
            resolver:zodResolver(signUpSchema)
        })
    

    const onSubmit = async (data: TSignUpSchema) => {
        const response = await fetch('/api/signup', {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                confirmPassword:data.confirmPassword
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const responseData = await response.json()

        if (!response.ok) {
            alert('Submitting form failed')
            return
        }

        if (responseData.errors) {
            const errors = responseData.errors

            console.log(errors)

            switch (true) {
                case !!errors.email:
                    setError('email', {
                        type: 'server',
                        message: errors.email
                    })
                    break;
                case !!errors.password:
                    setError('password', {
                        type: 'server',
                        message: errors.password
                    })
                    break;
                case !!errors.confirmPassword:
                    setError('confirmPassword', {
                        type: 'server',
                        message: errors.confirmPassword
                    })
                    break;
                
                default:
                    alert('Something went wrong')
                    break;
            }

        }

        // reset()
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
