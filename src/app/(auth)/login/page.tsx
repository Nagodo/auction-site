import "@/style/auth.scss";
import { GoogleSignInButton } from '@/components/Auth/authButtons'
import React from 'react'
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CredentialsLogin } from "@/components/Auth/credentials/credentialsLogin";

async function Login() {

    const session = await getServerSession(authConfig);

    if (session) {
        return redirect("/");
    }

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
                <GoogleSignInButton />
                <span className="text-2xl font-semibold text-white text-center mt-8">Or</span>
                {/* <CredentialsSignInButton /> */}
                <CredentialsLogin />
        </div>
    </div>
    )
}

export default Login