"use client"

import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { PrintAction } from '../action/printText'

export default function Page() {


    const [state, formAction] = useFormState(PrintAction, {
        value: null,
        message: ''
    })


    const formRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if (state.success === "បានរក្សាទុកដោយជោគជ័យ!") {
            formRef.current?.reset();
        }
    }, [state.success]);

    
    return (
        <div className='p-5'>

            <div className='w-96 '>
                {state.message && (
                    <div className='text-white bg-red-400 p-4 my-3'>
                        {state.message}
                    </div>
                )}
            </div>

            <div className='w-96 '>
                {state.success && (
                    <div className='text-white bg-blue-300 p-4 my-3'>
                        {state.success}
                    </div>
                )}
            </div>

            <form ref={formRef} action={formAction}>
                <input
                    type="text"
                    name='name'
                    className='bg-gray-50 p-2 border-2 w-96'
                />
          
                <br />
                <input
                    type="text"
                    name='email'
                    id='email'
                    className='bg-gray-50 p-2 border-2 w-96 mt-2'
                />
                <br />
                <button
                    type="submit"
                    className='bg-blue-600 px-5 p-3 hover:bg-blue-400 text-white mt-2'
                >
                    Submit
                </button>
                <p>Your name is {state.value?.name}</p>
                <p>Your email is {state.value?.email}</p>
            </form>
        </div>
    )
}
