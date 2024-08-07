import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import SendEmailComponent from './sendEmail';


async function VerifyPage() {

    const session = await getServerSession(authConfig);
    if (!session || !session?.user) {
        redirect("/");
    }

    return (
        <SendEmailComponent />
    )
}

export default VerifyPage