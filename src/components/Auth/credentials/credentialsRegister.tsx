"use client"

import { FormEvent, useState } from "react";
import { CredentialsForm } from "./credentialsForm";
import { useRouter } from "next/navigation";
import { RegisterError } from "@enums/RegisterError";


interface CredentialsRegisterProps {
    csrfToken?: string;
}

export function CredentialsRegister(props: CredentialsRegisterProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        if (!email.includes("@")) {
            setError("Invalid email");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }
        
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();

                if (data.error === RegisterError.UserAlreadyExists) {
                    setError("User already exists");
                    return;
                }

                router.push("/");
            }

            
        } catch (error) {
            setError("Error");
        }
    
    };

    return (
        <CredentialsForm type="register" submitLabel="Register" error={error} onSubmitClicked={handleSubmit} csrfToken={props.csrfToken} />
    )
}