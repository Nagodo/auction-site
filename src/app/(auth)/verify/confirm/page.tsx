import React, { Suspense } from 'react'
import TokenVerification from './tokenVerification';


function ConfirmEmailPage() {

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
            <Suspense fallback={<div>Loading...</div>}>
                <TokenVerification />
            </Suspense>
        </div>
    )
}

export default ConfirmEmailPage;