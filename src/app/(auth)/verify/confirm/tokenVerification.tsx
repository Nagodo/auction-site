"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TokenVerification = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    useEffect(() => {
        handleVerifyPageEntered();
    }, []);
    
    async function handleVerifyPageEntered() {

        if (!token) {
            setError("No token found");
            return;
        }
        
        try {
            const response = await fetch("/api/auth/verify/confirm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token: token
                }),
            });
            

            if (response.ok) {
                await response.json();
                setIsVerified(true);
            }


        } catch (error: any) {
            console.log(error);
            setError(error.message);
        }

    }

    return (
        <div className="flex flex-col items-center mt-10 p-10 shadow-md">

            {!isVerified && (
                <h1 className="mt-10 mb-4 text-4xl font-bold">EMail is being verified</h1>
            )}
            {isVerified && (
                <h1 className="mt-10 mb-4 text-4xl font-bold">Your email was verified</h1>
            )}
            {error && (
                <p className="mt-4 text-red-500">{error}</p>
            )}  
        </div>
    )
}

export default TokenVerification;