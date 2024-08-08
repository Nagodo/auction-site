"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CredentialsForm } from "./credentialsForm";

interface CredentialsLoginProps {
    csrfToken?: string;
}

export function CredentialsLogin(props: CredentialsLoginProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        
        const signInResponse = await signIn("credentials", {
            email: data.get("email") as string,
            password: data.get("password") as string,
            redirect: false,
        });

        if (signInResponse && !signInResponse.error) {
            router.push("/");
            window.location.reload();
        } else {
            setError("Invalid credentials");
        }
        
    
    };

    return (
        <CredentialsForm type="login" submitLabel="Login" error={error} onSubmitClicked={handleSubmit} csrfToken={props.csrfToken} />
    )
}