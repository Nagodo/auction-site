"use client"
import { useState } from "react";

interface SendEmailComponentProps {
  
}

const SendEmailComponent = ({}: SendEmailComponentProps) => {
    const [emailSent, setEmailSent] = useState(false);
    const [lastMailSendtAt, setLastMailSendtAt] = useState<Date>();

    async function handleClick() {
        const emailSent = await handleSendVerificationEmail();
        setEmailSent(emailSent);
    }

    async function handleSendVerificationEmail() {
        
        try {
            const response = await fetch("/api/auth/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                }),
            });

            if (response.ok) {
                await response.json();
                return true;
            }


        } catch (error: any) {
            console.log(error);
            return false;
        }
        return false;

    }

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <h1 className="mt-10 mb-4 text-4xl font-bold">Please verify account</h1>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleClick}>
                    Send verification email
                </button>

                {emailSent && (
                    <p className="mt-4">Please check your email for a verification link</p>
                )}
                
            </div>
        </div>
    )
}

export default SendEmailComponent;