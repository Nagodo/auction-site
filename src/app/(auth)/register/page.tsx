"use client"

import { CredentialsRegister } from '@/components/Auth/credentials/credentialsRegister';
import React from 'react'


function Register() {


    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <h1 className="mt-10 mb-4 text-4xl font-bold">Register</h1>
                    <CredentialsRegister /> 
            </div>
        </div>
    )
}

export default Register